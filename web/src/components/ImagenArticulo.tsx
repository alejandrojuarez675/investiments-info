"use client";

import { useState } from "react";
import { TIPO_INFO } from "@/lib/tipos-articulo";
import type { TipoArticulo } from "@/lib/articulos";
import styles from "./ImagenArticulo.module.css";

type Props = {
  src: string | null;
  alt?: string;
  tipo: TipoArticulo;
  className: string;
};

export default function ImagenArticulo({ src, alt = "", tipo, className }: Props) {
  const [fallo, setFallo] = useState(false);

  if (!src || fallo) {
    return (
      <span className={`${className} ${styles.fallback} ${styles[tipo]}`} aria-hidden="true">
        <span className={styles.icono}>{TIPO_INFO[tipo].icono}</span>
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFallo(true)}
    />
  );
}
