export const CATEGORIA_INFO: Record<string, { etiqueta: string; color: string }> = {
  economia: { etiqueta: "Economía", color: "#1d4ed8" },
  politica: { etiqueta: "Política", color: "#b91c1c" },
  deportes: { etiqueta: "Deportes", color: "#15803d" },
  policiales: { etiqueta: "Policiales", color: "#7c3aed" },
  espectaculos: { etiqueta: "Espectáculos", color: "#db2777" },
};

const CATEGORIA_FALLBACK = { color: "#475569" };

export function infoCategoria(categoria: string): { etiqueta: string; color: string } {
  return CATEGORIA_INFO[categoria] ?? { etiqueta: categoria, ...CATEGORIA_FALLBACK };
}
