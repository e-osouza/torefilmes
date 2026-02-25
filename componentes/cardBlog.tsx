"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import type { Post } from "@/services/postService";
import { fetchPosts } from "@/services/postClientService";

interface CardBlogProps {
  initialPosts?: Post[];
}

export default function CardBlog({ initialPosts }: CardBlogProps) {
  const perPage = 6;
  const initialPage = initialPosts ? Math.ceil(initialPosts.length / perPage) : 0;

  const [posts, setPosts] = useState<Post[]>(initialPosts || []);
  const [page, setPage] = useState(initialPage);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(!initialPosts || initialPosts.length >= perPage);

  const handleLoadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    const nextPage = page + 1;
    setLoadingMore(true);

    const data = await fetchPosts(nextPage, perPage);

    if (data.length < perPage) {
      setHasMore(false);
    }

    setPosts((prev) => [...prev, ...data]);
    setPage(nextPage);
    setLoadingMore(false);
  }, [hasMore, loadingMore, page, perPage]);

  const SkeletonCard = () => (
    <div className="animate-pulse bg-[#333] rounded-xl shadow overflow-hidden">
      <div className="bg-[#222] h-52 w-full" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-[#111] rounded w-3/4"></div>
        <div className="h-3 bg-[#111] rounded w-3/5"></div>
      </div>
    </div>
  );

  if (!posts.length && !hasMore) {
    return <p className="text-center text-white/70">Nenhum post encontrado.</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {posts.map((post) => {
          const image =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/placeholder.jpg";

          return (
            <Link
              key={post.id}
              href={`/${post.slug}`}
              className="block bg-[#111] rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative w-full aspect-[10/6] rounded-lg overflow-hidden">
                <div className="flex justify-between absolute z-[1] w-full top-3 px-3">
                  <p className="bg-black/50 text-white text-[12px] leading-[1] rounded-full px-3 py-1">
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </p>
                  <Image src="/icone-tore.svg" width={25} height={25} alt="" />
                </div>
                <Image
                  src={image}
                  alt={post.title.rendered}
                  fill
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              <div className="p-5">
                <h3
                  className="text-md text-white font-[500] mb-2 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div className="pointer-events-none flex gap-2 items-center rounded-full border-1 border-white w-fit uppercase font-[600] text-[11px] text-white px-4 py-1 mt-5">
                  <MoveRight size={20} />Ler Mais
                </div>
              </div>
            </Link>
          );
        })}

        {loadingMore &&
          Array.from({ length: perPage }).map((_, i) => (
            <SkeletonCard key={`load-${i}`} />
          ))}
      </div>

      {hasMore && !loadingMore && (
        <button
          onClick={() => {
            void handleLoadMore();
          }}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition cursor-pointer"
        >
          Carregar mais
        </button>
      )}

      {loadingMore && (
        <button
          disabled
          className="mt-8 px-6 py-3 bg-blue-400 text-white font-medium rounded-lg opacity-70 cursor-not-allowed"
        >
          Carregando...
        </button>
      )}
    </div>
  );
}
