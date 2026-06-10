import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "@/component/footer";
import Header from "@/component/header";
import FloatingPhoneButton from "@/component/floatingPhoneButton";
import IntroSection from "@/component/sections/introSection";
import TherapistSection from "@/component/sections/therapistSection";
import HighlightSection from "@/component/sections/highlightSection";
import CourseSection from "@/component/sections/courseSection";
import PromiseSection from "@/component/sections/promiseSection";
import ContactInfoSection from "@/component/sections/contactInfoSection";
import CautionSection from "@/component/sections/cautionSection";
import FaqSection from "@/component/sections/faqSection";
import RegionHeroSection from "@/component/sections/regionHeroSection";
import RegionReviewSection from "@/component/sections/regionReviewSection";
import { REGIONS, getRegionBySlug } from "@/data/regions";
import { SITE_URL, OG_IMAGE_PATH } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
    return REGIONS.map((r) => ({ region: r.slug }));
}

type Props = { params: Promise<{ region: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { region: slug } = await params;
    const region = getRegionBySlug(slug);
    if (!region) return {};

    const title = `${region.shortName}출장마사지 ${region.shortName}출장안마 24시간 30분 도착 후불`;
    const description = `${region.name} 전 지역 30분 내 도착하는 출장마사지, 출장안마. 365일 24시간 영업, 100% 후불제. 현금, 계좌, 카드 결제 가능. 검증된 전문 관리사가 프라이빗 홈케어를 선사합니다.`;
    const url = `${SITE_URL}/${region.slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: "website",
            url,
            title,
            description,
            siteName: "썸출장마사지",
            images: [
                {
                    url: OG_IMAGE_PATH,
                    width: 1384,
                    height: 726,
                    alt: `${region.name} 썸출장마사지 24시 후불제 출장마사지`,
                },
            ],
            locale: "ko_KR",
        },
    };
}

export default async function RegionPage({ params }: Props) {
    const { region: slug } = await params;
    const region = getRegionBySlug(slug);
    if (!region) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        name: `썸출장마사지 ${region.name}`,
        alternateName: [
            `${region.shortName}출장마사지`,
            `${region.shortName}출장안마`,
        ],
        image: `${SITE_URL}${OG_IMAGE_PATH}`,
        url: `${SITE_URL}/${region.slug}`,
        priceRange: "₩70,000-₩200,000",
        areaServed: { "@type": "AdministrativeArea", name: region.name },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
        },
        paymentAccepted: "현금, 계좌이체, 카드결제",
    };

    return (
        <main className="min-h-screen bg-brand-black text-on-dark">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <IntroSection highlightWord={region.shortName} />
            <RegionHeroSection region={region} />
            <HighlightSection />
            <TherapistSection />
            <RegionReviewSection region={region} />
            <CourseSection />
            <ContactInfoSection />
            <PromiseSection />
            <CautionSection />
            <FaqSection />
            <Footer />
            <FloatingPhoneButton />
        </main>
    );
}
