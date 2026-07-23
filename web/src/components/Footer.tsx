import { SITE_NAME } from "@/lib/config";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
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
