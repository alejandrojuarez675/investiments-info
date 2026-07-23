import Link from "next/link";
import { listarArticulos } from "@/lib/articulos";
import styles from "./page.module.css";

export default async function Home() {
  const articulos = await listarArticulos();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Últimas noticias</h1>
        <ul className={styles.lista}>
          {articulos.map((articulo) => (
            <li key={articulo.id}>
              <Link href={`/articulo/${articulo.slug}`}>
                <h2>{articulo.titulo}</h2>
                <p>{articulo.resumen}</p>
                <span className={styles.meta}>
                  {articulo.categoria} ·{" "}
                  {new Date(articulo.publicado_en).toLocaleDateString("es-AR")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {articulos.length === 0 && (
          <p>Todavía no hay artículos publicados.</p>
        )}
      </main>
    </div>
  );
}
