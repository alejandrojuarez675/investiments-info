import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { obtenerArticuloPorSlug, obtenerRelacionados, listarSlugs } from "@/lib/articulos";
import { SITE_NAME, SITE_URL } from "@/lib/config";
import { TIPO_INFO } from "@/lib/tipos-articulo";
import ArticuloCard from "@/components/ArticuloCard";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await listarSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articulo = await obtenerArticuloPorSlug(slug);

  if (!articulo) {
    return {};
  }

  return {
    title: articulo.titulo,
    description: articulo.resumen,
    alternates: {
      canonical: `/articulo/${articulo.slug}`,
    },
    openGraph: {
      type: "article",
      title: articulo.titulo,
      description: articulo.resumen,
      url: `${SITE_URL}/articulo/${articulo.slug}`,
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
  const { slug } = await params;
  const articulo = await obtenerArticuloPorSlug(slug);

  if (!articulo) {
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
      "@id": `${SITE_URL}/articulo/${articulo.slug}`,
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
