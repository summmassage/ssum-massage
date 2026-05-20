import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
    SITE_URL,
    SITE_TITLE,
    SITE_DESCRIPTION,
    localBusinessJsonLd,
    faqJsonLd,
} from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        url: SITE_URL + "/",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        siteName: "썸출장마사지",
        images: [
            { url: "/image/og.png", width: 1384, height: 726, alt: "썸출장마사지 — 서울·경기·인천 24시간 후불제 출장마사지" },
        ],
        locale: "ko_KR",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
