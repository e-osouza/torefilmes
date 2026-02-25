const WP_API_BASE_URL = process.env.WP_API_URL ?? process.env.NEXT_PUBLIC_API_URL;
const DEFAULT_REVALIDATE_SECONDS = 300;

export interface Video {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  link: string;
  acf?: {
    url_video?: string;
    [key: string]: unknown;
  };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{ source_url: string }>;
  };
}

function createWordPressUrl(path: string, params?: URLSearchParams) {
  if (!WP_API_BASE_URL) {
    throw new Error("WP API base URL não configurada. Defina WP_API_URL ou NEXT_PUBLIC_API_URL.");
  }

  const normalizedBase = WP_API_BASE_URL.endsWith("/")
    ? WP_API_BASE_URL
    : `${WP_API_BASE_URL}/`;

  const url = new URL(path.replace(/^\//, ""), normalizedBase);

  if (params) {
    for (const [key, value] of params.entries()) {
      if (value !== "") {
        url.searchParams.set(key, value);
      }
    }
  }

  return url;
}

async function fetchWordPress<T>(
  path: string,
  params: URLSearchParams,
  tags: string[]
): Promise<T> {
  const url = createWordPressUrl(path, params);

  const response = await fetch(url.toString(), {
    next: {
      revalidate: DEFAULT_REVALIDATE_SECONDS,
      tags,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar ${url.pathname}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchVideos(
  page: number = 1,
  perPage: number = 10
): Promise<Video[]> {
  try {
    const params = new URLSearchParams({
      page: String(page),
      per_page: String(perPage),
      _embed: "1",
    });

    return await fetchWordPress<Video[]>("/video", params, ["wp:videos"]);
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error);
    return [];
  }
}

export async function fetchVideoBySlug(slug: string): Promise<Video | null> {
  try {
    const params = new URLSearchParams({
      slug,
      _embed: "1",
    });

    const videos = await fetchWordPress<Video[]>("/video", params, [
      "wp:videos",
      `wp:video:${slug}`,
    ]);

    return videos[0] ?? null;
  } catch (error) {
    console.error("Erro ao buscar vídeo pelo slug:", error);
    return null;
  }
}
