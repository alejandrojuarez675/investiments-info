import {
  listarArticulos,
  listarArticulosPorTipo,
  obtenerSeccionesHome,
} from "@/lib/articulos";
import ArticuloCard from "@/components/ArticuloCard";
import SeccionColumna from "@/components/SeccionColumna";
import CarruselNoticias from "@/components/CarruselNoticias";
import styles from "./page.module.css";

export default async function Home() {
  const [articulos, secciones, ultimasNoticias] = await Promise.all([
    listarArticulos(),
    obtenerSeccionesHome(),
    listarArticulosPorTipo("news"),
  ]);
  const [destacado, secundaria1, secundaria2, ...resto] = articulos;

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
        <section className={styles.apertura}>
          <ArticuloCard articulo={destacado} destacado />
          {(secundaria1 || secundaria2) && (
            <div className={styles.aperturaSecundarias}>
              {secundaria1 && (
                <ArticuloCard articulo={secundaria1} ocultarResumen />
              )}
              {secundaria2 && (
                <ArticuloCard articulo={secundaria2} ocultarResumen />
              )}
            </div>
          )}
        </section>
      )}

      {resto.length > 0 && (
        <section className={styles.grid}>
          {resto.map((articulo) => (
            <ArticuloCard key={articulo.id} articulo={articulo} />
          ))}
        </section>
      )}

      {secciones.length > 0 && (
        <section className={styles.secciones}>
          {secciones.map(({ categoria, articulos: notasSeccion }) => (
            <SeccionColumna
              key={categoria}
              categoria={categoria}
              articulos={notasSeccion}
            />
          ))}
        </section>
      )}

      <CarruselNoticias titulo="Últimas noticias" articulos={ultimasNoticias} />
    </main>
  );
}
