import Link from "next/link";
import { SITE_NAME } from "@/lib/config";
import { CATEGORIA_INFO } from "@/lib/categorias";
import styles from "./Header.module.css";

function formatearFechaHoy() {
  return new Date().toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.utilitaria}>
        <span className={styles.fecha}>{formatearFechaHoy()}</span>
      </div>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>$</span>
          {SITE_NAME}
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Portada</Link>
          {Object.entries(CATEGORIA_INFO).map(([categoria, info]) => (
            <Link key={categoria} href={`/${categoria}/`}>
              {info.etiqueta}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
