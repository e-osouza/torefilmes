import { fetchPostBySlug, fetchRelatedPosts, Post } from "@/services/postService";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 300;

type PageProps = { params: Promise<{ slug: string }> };

function stripHtml(input: string) {
  return input.replace(/<[^>]+>/g, "").trim();
}

function getPostCategoryId(post: Post) {
  return post._embedded?.["wp:term"]?.[0]?.[0]?.id ?? null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: "Post não encontrado",
      description: "O conteúdo solicitado não foi encontrado.",
    };
  }

  const title = stripHtml(post.title.rendered);
  const desc = stripHtml(post.excerpt?.rendered ?? "").slice(0, 160);
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.torefilmes.com.br";
  const normalizedSiteUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
  const url = `${normalizedSiteUrl}/${slug}`;

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: desc,
      url,
      type: "article",
      images: image
        ? [{ url: image, width: 1200, height: 630 }]
        : [{ url: `${normalizedSiteUrl}/default-og.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: image ? [image] : [`${normalizedSiteUrl}/default-og.jpg`],
    },
  };
}

function formatPostContent(content: string) {
  if (!content) return "";

  let cleaned = content.replace(/\[\/?[\w\d_-]+[^\]]*\]/g, "");

  const youtubeRegex =
    /(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11}))/g;

  cleaned = cleaned.replace(youtubeRegex, (_, __, videoId: string) => {
    return `
      <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px; margin:2rem 0;">
        <iframe
          src="https://www.youtube.com/embed/${videoId}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="position:absolute; top:0; left:0; width:100%; height:100%;"
        ></iframe>
      </div>
    `;
  });

  return cleaned.replace(/<p>\s*<\/p>/g, "");
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const post = await fetchPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg";
  const author = post._embedded?.author?.[0];

  const categoryId = getPostCategoryId(post);
  const relatedPosts = categoryId
    ? await fetchRelatedPosts(categoryId, post.id, 6)
    : [];

  return (
    <article className="max-w-[var(--largura)] mx-auto px-5 mt-20 md:mt-40">
      <h1
        className="max-w-[600px] text-3xl md:text-4xl leading-[1.2] font-bold text-white mb-5 md:mb-10"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      <div className="flex justify-between items-end gap-3 text-white mb-5">
        <span className="bg-[#333] rounded-full px-3 py-1 leading-[1] uppercase text-[13px]">
          {new Date(post.date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>

        {author && (
          <div className="flex items-center gap-2 text-sm">
            <span>Por: {author.name}</span>
          </div>
        )}
      </div>

      <div className="relative aspect-[16/8] mb-8 rounded-lg overflow-hidden">
        <Image src={featuredImage} alt={post.title.rendered} fill className="object-cover" priority />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        <div
          className="col-span-1 lg:col-span-8 conteudo-post prose prose-invert text-sm leading-[1.8] text-white text-justify"
          dangerouslySetInnerHTML={{ __html: formatPostContent(post.content.rendered) }}
        />

        <div className="col-span-1 lg:col-span-4 md:sticky md:top-27 self-start">
          <div className="p-8 bg-[url(/abstract-side.png)] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden relative">
            <div className="relative z-[1]">
              <p className="bg-white/10 w-fit flex items-center text-white justify-center uppercase text-[12px] mb-5 py-2 px-5 gap-2 rounded-full">
                Toré Filmes <Image src="/icone-tore.svg" width={20} height={20} alt="" />
              </p>
              <p className="text-white uppercase">
                Vamos transformar sua ideia em uma produção de impacto?
              </p>
              <Link
                href="/contato"
                className="flex gap-2 items-center text-white rounded-full border-2 w-fit uppercase font-[600] text-sm px-6 py-1 mt-5"
              >
                <MoveRight />Produza conosco
              </Link>
            </div>
            <div className="absolute w-full h-full bg-black/40 top-0 left-0"></div>
          </div>

          <div className="post-relative mt-10">
            <h3 className="text-white text-lg">Leia também</h3>
            <div className="mt-5 space-y-5">
              {relatedPosts.length > 0 ? (
                relatedPosts.map((related) => {
                  const image =
                    related._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/placeholder.jpg";

                  return (
                    <Link
                      key={related.id}
                      href={`/${related.slug}`}
                      className="flex items-center gap-3 hover:opacity-80 transition"
                    >
                      <div className="relative w-45 aspect-10/8 flex-shrink-0 rounded-md overflow-hidden">
                        <Image src={image} alt={related.title.rendered} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3
                          className="text-white text-md leading-tight line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: related.title.rendered }}
                        />
                        <span className="text-white leading-[1] uppercase text-[12px]">
                          {new Date(related.date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <p className="text-gray-400 text-sm">Nenhum post relacionado encontrado.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}