import { courses } from "@/data/data";

export const SITE_URL = "https://ssum-massage.com";

export const SITE_TITLE =
    "서울, 경기, 인천 출장마사지, 출장안마 — 썸출장마사지 썸마사지 | 전원 20대 관리사, 100% 후불제";

export const SITE_DESCRIPTION =
    "서울, 경기, 인천 30분 내 도착하는 출장마사지, 출장안마. 365일 24시간 영업, 100% 후불제. 현금, 계좌, 카드 결제 가능. 안심 DB 운영.";

export const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "썸출장마사지",
    alternateName: ["썸마사지", "썸출장안마"],
    image: `${SITE_URL}/image/og.png`,
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
    mainEntity: [
        {
            "@type": "Question",
            name: "예약금이나 보증금이 필요한가요?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "썸출장안마, 썸출장마사지는 100% 후불제입니다. 관리사 도착 후 결제하시면 됩니다. 예약금이나 보증금을 요구하는 곳은 사기 업체일 가능성이 높으니 주의하세요.",
            },
        },
        {
            "@type": "Question",
            name: "운영 시간은 어떻게 되나요?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "365일 24시간 운영하며 언제든 예약 가능합니다.",
            },
        },
        {
            "@type": "Question",
            name: "서비스 가능 지역은 어디인가요?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "서울, 경기, 인천 전 지역에 30분 내 도착을 목표로 운영합니다. 경기 외곽지역 및 피크 시간에는 다소 시간이 소요될 수 있습니다.",
            },
        },
        {
            "@type": "Question",
            name: "고객 DB는 안전하게 관리되나요?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "문의 전화를 이용하신 고객님의 DB를 철저히 보호합니다. 광고 문자를 일절 보내지 않으며, 고객님께서 먼저 연락 주시기 전까지 절대 먼저 연락드리지 않습니다.",
            },
        },
        {
            "@type": "Question",
            name: "결제 수단은 어떻게 되나요?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "현금, 계좌이체, 카드결제 모두 가능합니다. 카드결제는 부가세 10%가 추가됩니다.",
            },
        },
    ],
};
