import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { REGIONS } from "@/data/regions";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        {
            url: `${SITE_URL}/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        ...REGIONS.map((r) => ({
            url: `${SITE_URL}/${r.slug}`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.8,
        })),
    ];
}
