import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { REGIONS } from "@/data/regions";

const METRO_SLUGS = new Set(["seoul", "gyeonggi", "incheon"]);

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
            priority: METRO_SLUGS.has(r.slug) ? 0.9 : 0.7,
        })),
    ];
}
