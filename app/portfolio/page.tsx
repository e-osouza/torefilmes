import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio - Toré Filmes",
  description:
    "Confira o que já criamos e realize seu próximo projeto com a Toré.",
  openGraph: {
    title: "Portfolio - Toré Filmes",
    images: "./bg-3223.jpg",
  },
};

export default function Page() {
  return <PortfolioClient />;
}