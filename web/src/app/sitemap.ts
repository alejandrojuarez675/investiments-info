import type { MetadataRoute } from "next";
import { listarSlugs } from "@/lib/articulos";
import { SITE_URL } from "@/lib/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articulos = await listarSlugs();

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    ...articulos.map(({ slug, actualizado_en }) => ({
      url: `${SITE_URL}/articulo/${slug}`,
      lastModified: actualizado_en,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
  ];
}
