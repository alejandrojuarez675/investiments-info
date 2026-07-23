import Link from "next/link";
import { urlArticulo, type Articulo } from "@/lib/articulos";
import { TIPO_INFO } from "@/lib/tipos-articulo";
import styles from "./ArticuloCard.module.css";

function formatearFecha(fecha: Date) {
  return new Date(fecha).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

type Props = {
  articulo: Articulo;
  destacado?: boolean;
  ocultarResumen?: boolean;
};

export default function ArticuloCard({
  articulo,
  destacado = false,
  ocultarResumen = false,
}: Props) {
  const info = TIPO_INFO[articulo.tipo];

  return (
    <Link
      href={urlArticulo(articulo)}
      className={`${styles.card} ${styles[articulo.tipo]} ${
        destacado ? styles.destacado : ""
      }`}
    >
      <span className={styles.tipo}>
        <span aria-hidden="true">{info.icono}</span>
        {info.etiqueta}
      </span>
      {articulo.imagen_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={articulo.imagen_url}
          alt=""
          className={styles.imagen}
          loading="lazy"
        />
      ) : null}
      {destacado ? (
        <h2>{articulo.titulo}</h2>
      ) : (
        <h3>{articulo.titulo}</h3>
      )}
      {!ocultarResumen && <p>{articulo.resumen}</p>}
      <span className={styles.meta}>
        {articulo.categoria} · {formatearFecha(articulo.publicado_en)}
      </span>
    </Link>
  );
}
