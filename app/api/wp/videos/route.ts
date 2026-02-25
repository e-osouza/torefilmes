import { NextRequest, NextResponse } from "next/server";

const WP_API_BASE_URL = process.env.WP_API_URL ?? process.env.NEXT_PUBLIC_API_URL;
const REVALIDATE_SECONDS = 300;

function parsePositiveInt(value: string | null, fallback: number) {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function createWordPressUrl(params: URLSearchParams) {
  if (!WP_API_BASE_URL) {
    throw new Error("WP API base URL não configurada. Defina WP_API_URL ou NEXT_PUBLIC_API_URL.");
  }

  const normalizedBase = WP_API_BASE_URL.endsWith("/")
    ? WP_API_BASE_URL
    : `${WP_API_BASE_URL}/`;

  const url = new URL("video", normalizedBase);

  for (const [key, value] of params.entries()) {
    if (value !== "") {
      url.searchParams.set(key, value);
    }
  }

  return url;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const page = parsePositiveInt(searchParams.get("page"), 1);
    const perPage = Math.min(parsePositiveInt(searchParams.get("perPage") ?? searchParams.get("per_page"), 10), 20);
    const slug = searchParams.get("slug");

    const wpParams = new URLSearchParams();
    wpParams.set("page", String(page));
    wpParams.set("per_page", String(perPage));
    wpParams.set("_embed", "1");

    if (slug) {
      wpParams.set("slug", slug);
    }

    const tags = ["wp:videos"];

    if (slug) {
      tags.push(`wp:video:${slug}`);
    }

    const wpUrl = createWordPressUrl(wpParams);

    const response = await fetch(wpUrl.toString(), {
      next: {
        revalidate: REVALIDATE_SECONDS,
        tags,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Erro ao buscar vídeos no WordPress" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Erro na API interna de vídeos:", error);
    return NextResponse.json(
      { error: "Falha ao processar requisição de vídeos" },
      { status: 500 }
    );
  }
}
