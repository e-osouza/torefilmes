import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/componentes/header";
import Footer from "@/componentes/footer";
import Script from "next/script";

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
      </body>
    </html>
  );
}
