import { courses, faqs } from "@/data/data";

export const SITE_URL = "https://ssum-massage.com";

export const OG_IMAGE_PATH = "/image/og-image-option2.png";

export const SITE_TITLE =
    "서울, 경기, 인천 출장마사지, 출장안마 — 썸출장마사지 썸마사지 | 전원 20대 관리사, 100% 후불제";

export const SITE_DESCRIPTION =
    "서울, 경기, 인천 30분 내 도착하는 출장마사지, 출장안마. 365일 24시간 영업, 100% 후불제. 현금, 계좌, 카드 결제 가능. 안심 DB 운영.";

export const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "썸출장마사지",
    alternateName: ["썸마사지", "썸출장안마"],
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    url: `${SITE_URL}/`,
    priceRange: "₩70,000-₩200,000",
    areaServed: [
        { "@type": "City", name: "서울" },
        { "@type": "City", name: "경기" },
        { "@type": "City", name: "인천" },
    ],
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
    makesOffer: courses.flatMap((c) =>
        c.rows.map((r) => ({
            "@type": "Offer",
            name: `${c.name} ${r.duration}`,
            price: r.price.replace(/[^\d]/g, ""),
            priceCurrency: "KRW",
        })),
    ),
};

export const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
};
