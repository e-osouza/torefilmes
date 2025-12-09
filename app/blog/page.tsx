import CardBlog from "@/componentes/cardBlog";
import { fetchPosts } from "@/services/postService";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog - Toré Filmes",
  description: "aperte o play no conhecimento e explore nossos artigos.",
  openGraph: {
    title: "Blog - Toré Filmes",
    images: "./bg-3223.jpg",
  },
};

export default async function Blog() {
  const posts = await fetchPosts(1, 10);
  const [firstPost, ...otherPosts] = posts;

  return (
    <>
      {/* Hero */}
      <div className="bg-[url(/bg-abstract.jpg)] bg-center bg-cover bg-no-repeat relative">
        <div className="max-w-[var(--largura)] mx-auto px-5 pt-50 pb-10 md:pt-80 md:pb-20 relative z-[1]">
          <h1 className="text-white text-center uppercase leading-[1.2] text-2xl md:text-3xl max-w-[580px] mx-auto">
            Aperte o play no conhecimento e explore nossos artigos
          </h1>
          <p className="max-w-[750px] mx-auto text-white text-center text-sm mt-5">
            Muito além das câmeras, este espaço reúne insights sobre audiovisual,
            comunicação e criatividade, com dicas, tendências e bastidores que mostram
            como o audiovisual transforma negócios e conecta pessoas.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-black/10"></div>
      </div>

      <div className="max-w-[var(--largura)] mx-auto px-5 my-10">
        {/* Destaque do primeiro post */}
        {firstPost && (
          <div className="blog-1 grid grid-cols-1 md:grid-cols-12 items-center bg-[#111] rounded-lg overflow-hidden">
            <div className="order-2 md:order-1 p-8 col-span-1 md:col-span-5">
              <a href={`/${firstPost.slug}`}>
                <h3 className="text-white text-xl leading-[1.4]" dangerouslySetInnerHTML={{ __html: firstPost.title.rendered }}/>
              </a>
              <a href={`/${firstPost.slug}`} className="flex gap-2 items-center rounded-full border border-white w-fit uppercase font-[600] text-sm text-white px-6 py-1 mt-5 hover:bg-white hover:text-black transition-all"><MoveRight />Ler Mais</a>
            </div>
            <a href={`/${firstPost.slug}`} className="order-1 md:order-2 col-span-1 md:col-span-7 aspect-[10/5] relative">
              <Image
                src={
                  firstPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/placeholder.jpg"
                }
                alt={firstPost.title.rendered}
                fill
                className="object-cover"
              />
            </a>
          </div>
        )}

        {/* Restante dos posts */}
        <div className="mt-10">
          <CardBlog initialPosts={otherPosts} />
        </div>
      </div>
    </>
  );
}