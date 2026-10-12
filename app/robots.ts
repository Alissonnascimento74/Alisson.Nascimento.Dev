import type { MetadataRoute } from "next";
import { content } from "@/data/content";

// /robots.txt — libera tudo e aponta o sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${content.pt.profile.siteUrl}/sitemap.xml`,
  };
}
