// src/services/videoService.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export interface Video {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  link: string;
  featured_media: number;
  acf?: {
    url_video?: string; // 👈 aqui está o que importa pra gente
  };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{ source_url: string }>;
  };
}

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