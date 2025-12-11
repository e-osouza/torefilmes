"use client";

import { useEffect, useState } from "react";
import { fetchPosts, Post } from "../services/postService";
import Image from "next/image";
import { MoveRight } from "lucide-react";

interface CardBlogProps {
  initialPosts?: Post[];
}

export default function CardBlog({ initialPosts }: CardBlogProps) {
  const perPage = 6;

  // 👇 Página inicial depende da quantidade de posts já carregada no SSR
  const initialPage = initialPosts ? Math.ceil(initialPosts.length / perPage) : 0;

  const [posts, setPosts] = useState<Post[]>(initialPosts || []);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(!initialPosts);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!initialPosts) loadPosts(1, true);
  }, []);

  const loadPosts = async (pageNumber: number, replace = false) => {
    if (replace) setLoading(true);
    else setLoadingMore(true);

    const data = await fetchPosts(pageNumber, perPage);

    if (data.length < perPage) setHasMore(false);

    setPosts((prev) => (replace ? data : [...prev, ...data]));
    setLoading(false);
    setLoadingMore(false);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadPosts(nextPage);
  };

  // 👇 componente de skeleton
  const SkeletonCard = () => (
    <div className="animate-pulse bg-[#333] rounded-xl shadow overflow-hidden">
      <div className="bg-[#222] h-52 w-full" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-[#111] rounded w-3/4"></div>
        <div className="h-3 bg-[#111] rounded w-3/5"></div>
      </div>
    </div>
  );

  // 👇 skeleton inicial
  if (loading) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: perPage }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {posts.map((post) => {
          const image =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/placeholder.jpg";

          return (
            <a
              key={post.id}
             href={`/${post.slug}`}
              className="block bg-[#111] rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative w-full aspect-[10/6] rounded-lg overflow-hidden relative">
                <div className="flex justify-between absolute z-[1] w-full top-3 px-3">
                    <p className="bg-black/50 text-white text-[12px] leading-[1] rounded-full px-3 py-1">{new Date(post.date).toLocaleDateString("pt-BR")}</p>
                    <Image src={"/icone-tore.svg"} width={25} height={25} alt=""/>
                </div>
                <Image
                  src={image}
                  alt={post.title.rendered}
                  fill
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              <div className="p-5">
                <h3 className="text-md text-white font-[500] mb-2 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}/>
                <div className="pointer-events-none flex gap-2 items-center rounded-full border-1 border-white w-fit uppercase font-[600] text-[11px] text-white px-4 py-1 mt-5"><MoveRight size={20}/>Ler Mais</div>
              </div>
            </a>
          );
        })}

        {/* skeletons adicionais ao clicar em "Carregar mais" */}
        {loadingMore &&
          Array.from({ length: perPage }).map((_, i) => (
            <SkeletonCard key={`load-${i}`} />
          ))}
      </div>

      {hasMore && !loadingMore && (
        <button
          onClick={handleLoadMore}
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