import Link from "next/link";
import { urlArticulo, type Articulo } from "@/lib/articulos";
import { infoCategoria } from "@/lib/categorias";
import styles from "./SeccionColumna.module.css";

type Props = {
  categoria: string;
  articulos: Articulo[];
};

export default function SeccionColumna({ categoria, articulos }: Props) {
  const info = infoCategoria(categoria);
  const [destacado, ...resto] = articulos;

  if (!destacado) {
    return null;
  }

  return (
    <div className={styles.columna}>
      <div className={styles.header} style={{ borderColor: info.color }}>
        <span className={styles.titulo} style={{ color: info.color }}>
          {info.etiqueta}
        </span>
        <Link href={`/${categoria}/`} className={styles.verMas}>
          Ver más →
        </Link>
      </div>

      <Link href={urlArticulo(destacado)} className={styles.destacada}>
        {destacado.imagen_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={destacado.imagen_url}
            alt=""
            className={styles.destacadaImagen}
            loading="lazy"
          />
        ) : null}
        <span className={styles.destacadaOverlay}>
          <h3>{destacado.titulo}</h3>
        </span>
      </Link>

      {resto.length > 0 ? (
        <ul className={styles.lista}>
          {resto.map((articulo) => (
            <li key={articulo.id}>
              <Link href={urlArticulo(articulo)}>{articulo.titulo}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
