import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { obtenerArticuloPorSlug, listarSlugs } from "@/lib/articulos";
import { SITE_NAME, SITE_URL } from "@/lib/config";
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

  return (
    <div className={styles.page}>
      <article className={styles.articulo}>
        <span className={styles.categoria}>{articulo.categoria}</span>
        <h1>{articulo.titulo}</h1>
        <p className={styles.meta}>
          Por {articulo.autor} ·{" "}
          {articulo.publicado_en.toLocaleDateString("es-AR")}
        </p>
        <div
          className={styles.contenido}
          dangerouslySetInnerHTML={{ __html: articulo.contenido }}
        />
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
