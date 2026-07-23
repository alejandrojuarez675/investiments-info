import { listarArticulos } from "@/lib/articulos";
import ArticuloCard from "@/components/ArticuloCard";
import styles from "./page.module.css";

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
