import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://ssum-massage.com/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
