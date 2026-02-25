import type { MetadataRoute } from "next";

type WPSitemapPost = {
  slug: string;
  modified?: string;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.torefilmes.com.br";
const wpApiBaseUrl = process.env.WP_API_URL ?? process.env.NEXT_PUBLIC_API_URL;

async function getBlogUrls(): Promise<MetadataRoute.Sitemap> {
  if (!wpApiBaseUrl) return [];

  try {
    const normalizedBase = wpApiBaseUrl.endsWith("/")
      ? wpApiBaseUrl
      : `${wpApiBaseUrl}/`;

    const url = new URL("posts", normalizedBase);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("_fields", "slug,modified");

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    const posts = (await response.json()) as WPSitemapPost[];

    return posts
      .filter((post) => Boolean(post.slug))
      .map((post) => ({
        url: `${siteUrl}/${post.slug}`,
        lastModified: post.modified ? new Date(post.modified) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogRoutes = await getBlogUrls();
  return [...staticRoutes, ...blogRoutes];
}
