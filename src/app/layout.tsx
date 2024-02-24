import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./components/navbar/NavbarComponent"

import { Providers } from "./providers";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julio Perez, Software Engineer",
  description: "Encuentrás el valor agregado que Julio Perez aporta al mundo de la programación, aprende y participas en un espacio que te suma en tu carrera para ser un programador",
  openGraph: {
    title: 'Julio Perez, Software Engineer',
    description: 'Encuentrás el valor agregado que Julio Perez aporta al mundo de la programación, aprende y participas en un espacio que te suma en tu carrera para ser un programador',
    url: 'https://julioperez.dev',
    siteName: 'Julio Perez',
    images: [
      {
        url: "https://res.cloudinary.com/julioperez-dev/image/upload/v1708787177/cwlxk4uh0injfghxxoel.png",
        width: 400,
        height: 400,
        alt: 'Julio Perez Logo',
      },
    ],
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <NavbarComponent/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
