import Link from "next/link";
import { listarArticulos } from "@/lib/articulos";
import styles from "./page.module.css";

function formatearFecha(fecha: Date) {
  return new Date(fecha).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function Home() {
  const articulos = await listarArticulos();
  const [destacado, ...resto] = articulos;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Mercados · Inversiones · Economía</p>
        <h1>Noticias claras para decisiones informadas</h1>
        <p className={styles.heroSubtitle}>
          Análisis diario de dólar, tasas y mercados, sin vueltas.
        </p>
      </section>

      {articulos.length === 0 && (
        <p className={styles.vacio}>Todavía no hay artículos publicados.</p>
      )}

      {destacado && (
        <Link
          href={`/articulo/${destacado.slug}`}
          className={styles.destacado}
        >
          <span className={styles.categoria}>{destacado.categoria}</span>
          <h2>{destacado.titulo}</h2>
          <p>{destacado.resumen}</p>
          <span className={styles.meta}>
            {formatearFecha(destacado.publicado_en)}
          </span>
        </Link>
      )}

      {resto.length > 0 && (
        <section className={styles.grid}>
          {resto.map((articulo) => (
            <Link
              key={articulo.id}
              href={`/articulo/${articulo.slug}`}
              className={styles.card}
            >
              <span className={styles.categoria}>{articulo.categoria}</span>
              <h3>{articulo.titulo}</h3>
              <p>{articulo.resumen}</p>
              <span className={styles.meta}>
                {formatearFecha(articulo.publicado_en)}
              </span>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
