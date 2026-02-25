import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type RevalidatePayload = {
  slug?: string;
  postType?: "post" | "video" | string;
  tags?: string[];
};

const TAGS_BY_TYPE: Record<string, string[]> = {
  post: ["wp:posts"],
  video: ["wp:videos"],
};

export async function POST(request: NextRequest) {
  const configuredSecret = process.env.REVALIDATE_SECRET;

  if (!configuredSecret) {
    return NextResponse.json(
      { error: "REVALIDATE_SECRET não configurado" },
      { status: 500 }
    );
  }

  const incomingSecret =
    request.nextUrl.searchParams.get("secret") ??
    request.headers.get("x-revalidate-secret");

  if (incomingSecret !== configuredSecret) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const payload = (await request.json().catch(() => ({}))) as RevalidatePayload;
  const tags = new Set<string>();

  const typeTags = TAGS_BY_TYPE[payload.postType ?? ""];
  if (typeTags) {
    for (const tag of typeTags) {
      tags.add(tag);
    }
  }

  if (Array.isArray(payload.tags)) {
    for (const tag of payload.tags) {
      if (typeof tag === "string" && tag.trim()) {
        tags.add(tag.trim());
      }
    }
  }

  if (payload.slug) {
    tags.add(`wp:post:${payload.slug}`);
  }

  if (tags.size === 0) {
    tags.add("wp:posts");
    tags.add("wp:videos");
  }

  for (const tag of tags) {
    revalidateTag(tag, "max");
  }

  const revalidatedPaths = ["/blog", "/portfolio"];

  revalidatePath("/blog");
  revalidatePath("/portfolio");

  if (payload.slug) {
    const slugPath = `/${payload.slug}`;
    revalidatePath(slugPath);
    revalidatedPaths.push(slugPath);
  }

  return NextResponse.json({
    revalidated: true,
    tags: Array.from(tags),
    paths: revalidatedPaths,
  });
}
