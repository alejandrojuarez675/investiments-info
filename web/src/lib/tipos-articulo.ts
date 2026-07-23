import type { TipoArticulo } from "./articulos";

export const TIPO_INFO: Record<TipoArticulo, { etiqueta: string; icono: string }> = {
  "daily-report": { etiqueta: "Daily report", icono: "☀️" },
  "reporte-semanal": { etiqueta: "Reporte semanal", icono: "📊" },
  analisis: { etiqueta: "Análisis", icono: "🔎" },
  news: { etiqueta: "Noticia", icono: "📰" },
};
