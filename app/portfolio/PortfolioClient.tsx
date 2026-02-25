"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, Loader2 } from "lucide-react";
import type { Video } from "@/services/videoService";
import { fetchVideos } from "@/services/videoClientService";

function toEmbedUrl(url: string): string {
  const watchMatch = url.match(/v=([^&]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  return url;
}

export default function PortfolioClient() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const perPage = 5;

  const abrirVideo = (url: string) => {
    const embedUrl = toEmbedUrl(url);
    setVideoUrl(embedUrl);
  };

  const fecharVideo = () => {
    setVideoUrl(null);
  };

  useEffect(() => {
    document.body.style.overflow = videoUrl ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [videoUrl]);

  useEffect(() => {
    const carregarVideos = async () => {
      const data = await fetchVideos(1, perPage);
      setVideos(data);
      setLoading(false);

      if (data.length < perPage) {
        setHasMore(false);
      }
    };

    void carregarVideos();
  }, [perPage]);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);

    const nextPage = page + 1;
    const newVideos = await fetchVideos(nextPage, perPage);

    if (newVideos.length > 0) {
      setVideos((prev) => [...prev, ...newVideos]);
      setPage(nextPage);

      if (newVideos.length < perPage) {
        setHasMore(false);
      }
    } else {
      setHasMore(false);
    }

    setLoadingMore(false);
  }, [hasMore, loadingMore, page, perPage]);

  useEffect(() => {
    if (!hasMore || loadingMore) return;

    const sentinel = loadMoreRef.current;

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void loadMore();
        }
      },
      {
        rootMargin: "300px 0px",
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loadMore, loadingMore]);

  const getBackgroundImage = (video: Video): string => {
    return (
      video._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "/portfolio-fallback.jpg"
    );
  };

  return (
    <div className="bg-black overflow-hidden">
      <div className="bg-[url(/bg-abstract.jpg)] bg-center bg-cover bg-no-repeat relative">
        <div className="max-w-[var(--largura)] mx-auto px-5 pt-50 pb-10 md:pt-80 md:pb-20 relative z-[1]">
          <p className="bg-white/10 w-fit mx-auto flex items-center text-white justify-center uppercase text-[12px] mb-5 py-2 px-5 gap-2 rounded-full">
            Da ideia à tela
          </p>
          <h1 className="text-white text-center uppercase leading-[1.2] text-2xl md:text-3xl max-w-[690px] mx-auto">
            Confira o que já criamos e realize seu próximo projeto com a Toré.
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-40">
          <Loader2 className="text-white w-10 h-10 animate-spin" />
        </div>
      )}

      {!loading &&
        videos.map((video) => {
          const bgImage = getBackgroundImage(video);
          const urlVideo = video.acf?.url_video;

          return (
            <div
              key={video.id}
              className="bg-[center_top] aspect-20/12 md:aspect-20/7 bg-cover bg-no-repeat cursor-pointer group relative"
              style={{ backgroundImage: `url(${bgImage})` }}
              onClick={() => urlVideo && abrirVideo(urlVideo)}
            >
              <div className="bg-gradient-to-t from-black/90 to-black/10 w-full h-full absolute bottom-0 left-0"></div>

              <Image
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:scale-110"
                src="/icon-play.svg"
                width={70}
                height={70}
                alt="Play"
              />

              <div className="max-w-[var(--largura)] w-full left-1/2 -translate-x-1/2 mx-auto px-5 absolute bottom-10">
                <div className="text-white text-center">
                  <h3
                    className="text-xl md:text-2xl leading-[1.2] uppercase"
                    dangerouslySetInnerHTML={{ __html: video.title.rendered }}
                  />
                  {video.excerpt?.rendered && (
                    <p
                      className="text-sm max-w-[500px] mx-auto"
                      dangerouslySetInnerHTML={{
                        __html: video.excerpt.rendered,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}

      {hasMore && <div ref={loadMoreRef} className="h-1" />}

      {!loading && loadingMore && (
        <div className="flex items-center justify-center py-10">
          <Loader2 className="text-white w-8 h-8 animate-spin" />
        </div>
      )}

      {videoUrl && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={fecharVideo}
        >
          <div
            className="relative w-[95%] md:w-[90%] lg:w-[80%] aspect-video animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={fecharVideo}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 cursor-pointer"
            >
              <X size={32} />
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src={`${videoUrl}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
