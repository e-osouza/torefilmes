import type { Post } from "@/services/postService";

function buildPostsQuery(page: number, perPage: number) {
  const params = new URLSearchParams({
    page: String(page),
    perPage: String(perPage),
  });

  return `/api/wp/posts?${params.toString()}`;
}

export async function fetchPosts(page: number = 1, perPage: number = 10): Promise<Post[]> {
  try {
    const response = await fetch(buildPostsQuery(page, perPage));

    if (!response.ok) {
      throw new Error(`Erro ao buscar posts: ${response.status}`);
    }

    return (await response.json()) as Post[];
  } catch (error) {
    console.error("Erro ao buscar posts (client):", error);
    return [];
  }
}
