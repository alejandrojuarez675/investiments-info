import type { MetadataRoute } from "next";
import { listarSlugs, urlArticulo } from "@/lib/articulos";
import { SITE_URL } from "@/lib/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articulos = await listarSlugs();

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...articulos.map((articulo) => ({
      url: `${SITE_URL}${urlArticulo(articulo)}`,
      lastModified: articulo.actualizado_en,
      changeFrequency: "daily" as const,
      priority: 0.7,
      ...(articulo.imagen_url ? { images: [articulo.imagen_url] } : {}),
    })),
  ];
}
