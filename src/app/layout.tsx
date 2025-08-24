import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    title: "썸출장마사지 | 전원 20대 관리사 | 100% 후불제 | 서울 경기 인천",
    description: "서울·경기·인천 30분 내 도착. 365일 24시간 영업하고있습니다. 현금/계좌/카드 가능. 안심 DB 운영.",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        url: "https://ssum-massage.com/",
        title: "썸출장마사지 | 전원 20대 관리사 | 100% 후불제 | 서울 경기 인천",
        description:
            "서울·경기·인천 전지역 30분 내 도착, 365일 24시간 영업. 현금/계좌/카드 가능. 안심 DB 운영.",
        siteName: "썸출장마사지",
        images: [
            { url: "/image/og.png", width: 700, height: 800, alt: "썸출장마사지 안내" },
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
        {children}
      </body>
    </html>
  );
}
