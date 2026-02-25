import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/componentes/header";
import Footer from "@/componentes/footer";
import Script from "next/script";
import BotaoWP from "@/componentes/botaoWP";
import TopLoadingBar from "@/componentes/topLoadingBar";

const Sora = localFont({
  src: "../public/fonts/Sora.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Toré Filmes | Produtora de Vídeo em Manaus",
    template: "%s | Toré Filmes",
  },
  description:
    "Produtora audiovisual em Manaus para vídeos publicitários, institucionais e conteúdo digital de alto impacto.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.torefilmes.com.br"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Toré Filmes",
    title: "Toré Filmes | Produtora de Vídeo em Manaus",
    description:
      "Produtora audiovisual em Manaus para vídeos publicitários, institucionais e conteúdo digital de alto impacto.",
    url: "/",
    images: [{ url: "/bg-3223.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toré Filmes | Produtora de Vídeo em Manaus",
    description:
      "Produtora audiovisual em Manaus para vídeos publicitários, institucionais e conteúdo digital de alto impacto.",
    images: ["/bg-3223.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
        {/* 2) Carrega o GTM */}
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5BR88MQ');
            `,
          }}
        />
      </head>
      <body
        className={`${Sora.className} antialiased`}
      >
        <TopLoadingBar />
        <Header/>
        {children}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5BR88MQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Footer/>
        <BotaoWP/>
      </body>
    </html>
  );
}
