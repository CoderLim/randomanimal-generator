import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SeoScript from "@/components/seo/SeoScript";
import { BASE_URL } from '@/utils/env';

const inter = Inter({ subsets: ["latin"] });

const description = 'Generated a random animal species: A dog, cat, orangutan, reindeer, owl... Nearly 500 different animals!';

export const metadata: Metadata = {
  title: "Random Animal Generator",
  description,
  alternates: {
    canonical: 'https://randomanimal-generator.com/',
  },
  openGraph: {
    title: "Random Animal Generator",
    type: 'website',
    url: BASE_URL,
    images: `${BASE_URL}/logo.png`,
    description,
    siteName: 'Random Animal Generator',
    locale: 'en_US',
  },
  twitter: {
    site: 'Random Animal Generator',
    creator: 'CoderLim',
    description,
    title: 'Random Animal Generator',
    images: `${BASE_URL}/logo.png`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <SeoScript />
    </html>
  );
}
