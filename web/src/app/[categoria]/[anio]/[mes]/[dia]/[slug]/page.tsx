import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  obtenerArticuloPorSlug,
  obtenerRelacionados,
  listarSlugs,
  urlArticulo,
} from "@/lib/articulos";
import { SITE_NAME, SITE_URL } from "@/lib/config";
import { TIPO_INFO } from "@/lib/tipos-articulo";
import ArticuloCard from "@/components/ArticuloCard";
import styles from "./page.module.css";

type Props = {
  params: Promise<{
    categoria: string;
    anio: string;
    mes: string;
    dia: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const articulos = await listarSlugs();
  return articulos.map(({ slug, categoria, publicado_en }) => {
    const fecha = new Date(publicado_en);
    return {
      categoria,
      anio: String(fecha.getUTCFullYear()),
      mes: String(fecha.getUTCMonth() + 1).padStart(2, "0"),
      dia: String(fecha.getUTCDate()).padStart(2, "0"),
      slug,
    };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articulo = await obtenerArticuloPorSlug(slug);

  if (!articulo) {
    return {};
  }

  const url = urlArticulo(articulo);

  return {
    title: articulo.titulo,
    description: articulo.resumen,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: articulo.titulo,
      description: articulo.resumen,
      url: `${SITE_URL}${url}`,
      siteName: SITE_NAME,
      locale: "es_AR",
      publishedTime: articulo.publicado_en.toISOString(),
      modifiedTime: articulo.actualizado_en.toISOString(),
      authors: [articulo.autor],
      images: articulo.imagen_url ? [articulo.imagen_url] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: articulo.titulo,
      description: articulo.resumen,
    },
  };
}

export default async function ArticuloPage({ params }: Props) {
  const { categoria, anio, mes, dia, slug } = await params;
  const articulo = await obtenerArticuloPorSlug(slug);

  if (!articulo) {
    notFound();
  }

  // La URL canónica se arma solo a partir de slug/categoria/publicado_en;
  // si alguien llega con un path viejo o con la categoría/fecha desactualizada
  // (el artículo se movió de categoría, por ejemplo), no lo mostramos como
  // encontrado para evitar contenido duplicado bajo dos URLs distintas.
  const urlCanonica = urlArticulo(articulo);
  const urlSolicitada = `/${categoria}/${anio}/${mes}/${dia}/${slug}/`;
  if (urlSolicitada !== urlCanonica) {
    notFound();
  }

  const relacionados = await obtenerRelacionados(articulo.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: articulo.titulo,
    description: articulo.resumen,
    datePublished: articulo.publicado_en.toISOString(),
    dateModified: articulo.actualizado_en.toISOString(),
    author: [{ "@type": "Person", name: articulo.autor }],
    image: articulo.imagen_url ? [articulo.imagen_url] : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${urlCanonica}`,
    },
  };

  const info = TIPO_INFO[articulo.tipo];

  return (
    <div className={styles.page}>
      <article className={`${styles.articulo} ${styles[articulo.tipo]}`}>
        <span className={styles.tipo}>
          <span aria-hidden="true">{info.icono}</span>
          {info.etiqueta}
        </span>
        <span className={styles.categoria}>{articulo.categoria}</span>
        <h1>{articulo.titulo}</h1>
        <p className={styles.meta}>
          Por {articulo.autor} ·{" "}
          {articulo.publicado_en.toLocaleDateString("es-AR")}
        </p>
        {articulo.imagen_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={articulo.imagen_url}
            alt={articulo.titulo}
            className={styles.imagen}
          />
        ) : null}
        <div
          className={styles.contenido}
          dangerouslySetInnerHTML={{ __html: articulo.contenido }}
        />
      </article>
      {relacionados.length > 0 ? (
        <section className={styles.relacionados}>
          <h2>Más noticias</h2>
          <div className={styles.relacionadosGrid}>
            {relacionados.map((relacionado) => (
              <ArticuloCard key={relacionado.id} articulo={relacionado} />
            ))}
          </div>
        </section>
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
