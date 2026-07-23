import Link from "next/link";
import { urlArticulo, type Articulo } from "@/lib/articulos";
import ImagenArticulo from "./ImagenArticulo";
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
            <ImagenArticulo
              src={articulo.imagen_url}
              tipo={articulo.tipo}
              className={styles.imagen}
            />
            <span className={styles.itemTitulo}>{articulo.titulo}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
