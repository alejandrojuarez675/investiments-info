"use client";

import { useState } from "react";

type Props = {
  src: string | null;
  alt: string;
  className: string;
};

export default function ImagenDetalle({ src, alt, className }: Props) {
  const [fallo, setFallo] = useState(false);

  if (!src || fallo) {
    return null;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} onError={() => setFallo(true)} />
  );
}
