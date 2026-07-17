import { MetadataRoute } from "next";
import { areas } from "@/lib/areas-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.stone-stitch.co.uk";

  // Core pages
  const routes = ["", "/services", "/projects", "/about", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Local Area landing pages
  const areaRoutes = Object.keys(areas).map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...areaRoutes];
}
