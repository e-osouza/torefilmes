const WP_API_BASE_URL = process.env.WP_API_URL ?? process.env.NEXT_PUBLIC_API_URL;
const DEFAULT_REVALIDATE_SECONDS = 300;

export interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  link: string;
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{ source_url: string }>;
    author?: Array<{ name: string }>;
    ["wp:term"]?: Array<Array<{ id: number; slug: string; name: string }>>;
  };
}

type WPFetchOptions = {
  revalidate?: number;
  tags?: string[];
};

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
  { revalidate = DEFAULT_REVALIDATE_SECONDS, tags = [] }: WPFetchOptions = {}
): Promise<T> {
  const url = createWordPressUrl(path, params);

  const response = await fetch(url.toString(), {
    next: {
      revalidate,
      tags,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar ${url.pathname}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchPosts(page: number = 1, perPage: number = 10): Promise<Post[]> {
  try {
    const params = new URLSearchParams({
      page: String(page),
      per_page: String(perPage),
      _embed: "1",
    });

    return await fetchWordPress<Post[]>("/posts", params, {
      tags: ["wp:posts"],
    });
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
}

export async function fetchPostById(id: number): Promise<Post | null> {
  try {
    const params = new URLSearchParams({ _embed: "1" });

    return await fetchWordPress<Post>(`/posts/${id}`, params, {
      tags: ["wp:posts", `wp:post:${id}`],
    });
  } catch (error) {
    console.error("Erro ao buscar post por ID:", error);
    return null;
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  try {
    const params = new URLSearchParams({
      slug,
      _embed: "1",
    });

    const posts = await fetchWordPress<Post[]>("/posts", params, {
      tags: ["wp:posts", `wp:post:${slug}`],
    });

    return posts[0] ?? null;
  } catch (error) {
    console.error("Erro ao buscar post por slug:", error);
    return null;
  }
}

export async function fetchPostIdBySlug(slug: string): Promise<number | null> {
  const post = await fetchPostBySlug(slug);
  return post?.id ?? null;
}

export async function fetchRelatedPosts(
  categoryId: number,
  excludeId: number,
  limit: number = 4
): Promise<Post[]> {
  try {
    const params = new URLSearchParams({
      categories: String(categoryId),
      exclude: String(excludeId),
      per_page: String(limit),
      _embed: "1",
    });

    return await fetchWordPress<Post[]>("/posts", params, {
      tags: ["wp:posts", `wp:category:${categoryId}`],
    });
  } catch (error) {
    console.error("Erro ao buscar posts relacionados:", error);
    return [];
  }
}
