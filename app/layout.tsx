import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/componentes/header";
import Footer from "@/componentes/footer";

const Sora = localFont({
  src: "../public/fonts/Sora.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toré Filmes",
  description: "Toré Filmes, transformando imaginação em realidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${Sora.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
