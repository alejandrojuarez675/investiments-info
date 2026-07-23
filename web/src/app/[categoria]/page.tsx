import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { listarArticulosPorCategoria } from "@/lib/articulos";
import { infoCategoria, categoriasReales, CATEGORIA_ALIAS } from "@/lib/categorias";
import { pool } from "@/lib/db";
import { SITE_NAME } from "@/lib/config";
import ArticuloCard from "@/components/ArticuloCard";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ categoria: string }>;
};

export async function generateStaticParams() {
  const { rows } = await pool.query<{ categoria: string }>(
    `SELECT DISTINCT categoria FROM articulos WHERE publicado_en <= now()`
  );
  const categorias = new Set(rows.map(({ categoria }) => categoria));
  for (const alias of Object.keys(CATEGORIA_ALIAS)) {
    categorias.add(alias);
  }
  return Array.from(categorias).map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const { etiqueta } = infoCategoria(categoria);

  return {
    title: `${etiqueta} - ${SITE_NAME}`,
    description: `Últimas noticias de ${etiqueta}.`,
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  const articulos = await listarArticulosPorCategoria(categoriasReales(categoria));

  if (articulos.length === 0) {
    notFound();
  }

  const { etiqueta } = infoCategoria(categoria);
  const [destacado, ...resto] = articulos;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Sección</p>
        <h1>{etiqueta}</h1>
      </section>

      {destacado && (
        <div className={styles.destacadoWrapper}>
          <ArticuloCard articulo={destacado} destacado />
        </div>
      )}

      {resto.length > 0 && (
        <section className={styles.grid}>
          {resto.map((articulo) => (
            <ArticuloCard key={articulo.id} articulo={articulo} />
          ))}
        </section>
      )}
    </main>
  );
}
