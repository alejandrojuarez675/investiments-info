import Link from "next/link";
import { SITE_NAME } from "@/lib/config";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>$</span>
          {SITE_NAME}
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Portada</Link>
        </nav>
      </div>
    </header>
  );
}
