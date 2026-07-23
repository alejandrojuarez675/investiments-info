import Link from "next/link";
import { urlArticulo, type Articulo } from "@/lib/articulos";
import styles from "./CarruselNoticias.module.css";

type Props = {
  titulo: string;
  articulos: Articulo[];
};

export default function CarruselNoticias({ titulo, articulos }: Props) {
  if (articulos.length === 0) {
    return null;
  }

  return (
    <section className={styles.carrusel}>
      <h2>{titulo}</h2>
      <div className={styles.pista}>
        {articulos.map((articulo) => (
          <Link
            key={articulo.id}
            href={urlArticulo(articulo)}
            className={styles.item}
          >
            {articulo.imagen_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={articulo.imagen_url}
                alt=""
                className={styles.imagen}
                loading="lazy"
              />
            ) : null}
            <span className={styles.itemTitulo}>{articulo.titulo}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
