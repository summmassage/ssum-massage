import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import {
    SITE_URL,
    SITE_TITLE,
    SITE_DESCRIPTION,
    OG_IMAGE_PATH,
    localBusinessJsonLd,
    faqJsonLd,
} from "@/lib/seo";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const pretendard = localFont({
    variable: "--font-pretendard",
    display: "swap",
    src: [
        { path: "../../public/font/Pretendard-Thin.woff2",       weight: "100", style: "normal" },
        { path: "../../public/font/Pretendard-ExtraLight.woff2", weight: "200", style: "normal" },
        { path: "../../public/font/Pretendard-Light.woff2",      weight: "300", style: "normal" },
        { path: "../../public/font/Pretendard-Regular.woff2",    weight: "400", style: "normal" },
        { path: "../../public/font/Pretendard-Medium.woff2",     weight: "500", style: "normal" },
        { path: "../../public/font/Pretendard-SemiBold.woff2",   weight: "600", style: "normal" },
        { path: "../../public/font/Pretendard-Bold.woff2",       weight: "700", style: "normal" },
        { path: "../../public/font/Pretendard-ExtraBold.woff2",  weight: "800", style: "normal" },
        { path: "../../public/font/Pretendard-Black.woff2",      weight: "900", style: "normal" },
    ],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap",
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
            { url: OG_IMAGE_PATH, width: 1384, height: 726, alt: "썸출장마사지 — 서울, 경기, 인천 24시간 후불제 출장마사지" },
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
    <html lang="ko" className={`${pretendard.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
