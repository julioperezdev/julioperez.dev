import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://julioperez.dev"),
  title: "julioperez.dev | Backend, Cloud & IA",
  description:
    "Comparto contenido técnico sobre sistemas escalables, arquitectura cloud e IA sin rodeos.",
  openGraph: {
    title: "julioperez.dev | Backend, Cloud & IA",
    description:
      "Comparto contenido técnico sobre sistemas escalables, arquitectura cloud e IA sin rodeos.",
    url: "https://julioperez.dev",
    siteName: "Julio Perez",
    images: [
      {
        url: "https://res.cloudinary.com/julioperez-dev/image/upload/v1708787177/cwlxk4uh0injfghxxoel.png",
        width: 400,
        height: 400,
        alt: "Julio Perez Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
