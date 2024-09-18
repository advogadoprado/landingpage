import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/bootstrap.css";
import "@/styles/gaia.css";
import "@/styles/fonts/pe-icon-7-stroke.css";
import "./globals.css";

import favicon from "@/assets/img/favicon.png";

const ogLogoLink = "https://pradoadvogadoeassociados.com/_next/static/media/ogLogo.b9bea9c3.jpg";

const inter = Inter({ subsets: ["latin"] });
const dataMetaData = {
  title: "Prado Advogados Associados",
  description: "Nosso objetivo: disponibilizar serviços completos, em espaços equipados com tudo de moderno, com profissionais qualificados, e um atendimento humanizado e de excelência."
}

export const metadata: Metadata = {
  title: dataMetaData.title,
  description: dataMetaData.description,
  openGraph: {
    title: dataMetaData.title,
    description: dataMetaData.description,
    images: [
      {
        url: ogLogoLink,
        width: 1200,
        height: 630,
        alt: dataMetaData.title
      }
    ],
    type: "website",
    locale: "pt_BR",
    url: "https://www.pradoadvogadoeassociados.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Cambo|Poppins:400,600" rel="stylesheet" type="text/css" />
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="icon" href={favicon.src} type="image/x-icon" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={dataMetaData.title} />
        <meta property="og:description" content={dataMetaData.description} />
        <meta property="og:image" content={ogLogoLink} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://www.pradoadvogadoeassociados.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}