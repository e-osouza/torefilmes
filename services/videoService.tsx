// src/services/videoService.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Tipagem básica do retorno do CPT "video"
export interface Video {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  link: string;
  acf?: Record<string, any>; // deixa genérico pra encaixar com os campos ACF
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{ source_url: string }>;
  };
}

// 🔹 Busca lista de vídeos
export async function fetchVideos(
  page: number = 1,
  perPage: number = 10
): Promise<Video[]> {
  try {
    const response = await api.get<Video[]>(
      `/video?page=${page}&per_page=${perPage}&_embed`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error);
    return [];
  }
}

// 🔹 Busca um vídeo pelo slug (se precisar no futuro)
export async function fetchVideoBySlug(slug: string): Promise<Video | null> {
  try {
    const response = await api.get<Video[]>(`/video?slug=${slug}&_embed`);
    if (response.data.length > 0) return response.data[0];
    return null;
  } catch (error) {
    console.error("Erro ao buscar vídeo pelo slug:", error);
    return null;
  }
}