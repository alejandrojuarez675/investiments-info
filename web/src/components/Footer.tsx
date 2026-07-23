import Link from "next/link";
import { SITE_NAME } from "@/lib/config";
import { CATEGORIA_INFO } from "@/lib/categorias";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <Link href="/">Portada</Link>
          {Object.entries(CATEGORIA_INFO).map(([categoria, info]) => (
            <Link key={categoria} href={`/${categoria}/`}>
              {info.etiqueta}
            </Link>
          ))}
        </nav>
        <p>
          © {year} {SITE_NAME}. Todos los derechos reservados.
        </p>
        <p className={styles.disclaimer}>
          Contenido informativo y educativo. No constituye asesoramiento
          financiero personalizado.
        </p>
      </div>
    </footer>
  );
}
