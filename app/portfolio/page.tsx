import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça projetos audiovisuais da Toré Filmes para campanhas, institucionais e conteúdo digital.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfólio",
    description:
      "Conheça projetos audiovisuais da Toré Filmes para campanhas, institucionais e conteúdo digital.",
    url: "/portfolio",
    images: [{ url: "/bg-3223.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio",
    description:
      "Conheça projetos audiovisuais da Toré Filmes para campanhas, institucionais e conteúdo digital.",
    images: ["/bg-3223.jpg"],
  },
};

export default function Page() {
  return <PortfolioClient />;
}
