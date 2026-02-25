import type { Video } from "@/services/videoService";

function buildVideosQuery(page: number, perPage: number) {
  const params = new URLSearchParams({
    page: String(page),
    perPage: String(perPage),
  });

  return `/api/wp/videos?${params.toString()}`;
}

export async function fetchVideos(
  page: number = 1,
  perPage: number = 10
): Promise<Video[]> {
  try {
    const response = await fetch(buildVideosQuery(page, perPage));

    if (!response.ok) {
      throw new Error(`Erro ao buscar vídeos: ${response.status}`);
    }

    return (await response.json()) as Video[];
  } catch (error) {
    console.error("Erro ao buscar vídeos (client):", error);
    return [];
  }
}
