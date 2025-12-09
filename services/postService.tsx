import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

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
  };
}

// 🔹 Busca lista de posts
export async function fetchPosts(page: number = 1, perPage: number = 10): Promise<Post[]> {
  try {
    const response = await api.get<Post[]>(
      `/posts?page=${page}&per_page=${perPage}&_embed`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
}

// 🔹 Busca um post pelo ID
export async function fetchPostById(id: number): Promise<Post | null> {
  try {
    const response = await api.get<Post>(`/posts/${id}?_embed`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar post por ID:", error);
    return null;
  }
}

// 🔹 Busca o ID de um post pelo slug
export async function fetchPostIdBySlug(slug: string): Promise<number | null> {
  try {
    const response = await api.get<Post[]>(`/posts?slug=${slug}`);
    if (response.data.length > 0) return response.data[0].id;
    return null;
  } catch (error) {
    console.error("Erro ao buscar ID pelo slug:", error);
    return null;
  }
}

// 🔹 Busca posts relacionados (mesma categoria, exclui o atual)
export async function fetchRelatedPosts(categoryId: number, excludeId: number, limit: number = 4): Promise<Post[]> {
  try {
    const response = await api.get<Post[]>(
      `/posts?categories=${categoryId}&exclude=${excludeId}&per_page=${limit}&_embed`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar posts relacionados:", error);
    return [];
  }
}