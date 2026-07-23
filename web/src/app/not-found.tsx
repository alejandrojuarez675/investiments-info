import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.6px" }}>
        404 — No encontrado
      </h1>
      <p style={{ color: "var(--color-text-muted)" }}>
        El artículo que buscás no existe o fue eliminado.
      </p>
      <Link href="/" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
        Volver a la portada
      </Link>
    </main>
  );
}
