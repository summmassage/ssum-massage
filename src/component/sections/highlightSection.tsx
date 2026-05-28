import Image from "next/image";
import FadeUpWrapper from "@/component/fadeUpWrapper";

const ITEMS = [
    {
        image: "/image/masseuse.png",
        alt: "출장 차량 — 서울, 경기, 인천 전지역 24시간 이동",
        title: "서울, 경기, 인천 전지역",
        desc: "24시간 서울, 경기, 인천 30분 내 빠른 이동 가능",
        width: 1122,
        height: 1402,
        maxW: 360,
    },
    {
        image: "/image/enter-room.png",
        alt: "다양한 숙박업소 이용 가능",
        title: "자택, 호텔, 모텔",
        desc: "다양한 숙박업소에서 이용 가능하십니다",
        width: 1448,
        height: 1086,
        maxW: 480,
    },
    {
        image: "/image/massage-acting.png",
        alt: "전문 관리사 1:1 케어",
        title: "전문 관리사 1:1 케어",
        desc: "편안하게 힐링하세요",
        width: 1254,
        height: 1254,
        maxW: 420,
    },
];

export default function HighlightSection() {
    return (
        <section className="py-[88px] sm:py-[110px] bg-brand-ink">
            <div className="mx-auto max-w-3xl px-5 sm:px-8">
                <FadeUpWrapper>
                    <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
                        <h2
                            className="text-white font-extrabold"
                            style={{
                                fontSize: "clamp(32px, 5vw, 64px)",
                                lineHeight: 1.05,
                                letterSpacing: "-0.025em",
                            }}
                        >
                            <span className="text-gold">SSUM</span> 만의 특별 케어
                        </h2>
                    </div>
                </FadeUpWrapper>

                <div className="flex flex-col gap-16 sm:gap-20">
                    {ITEMS.map((item, i) => (
                        <FadeUpWrapper key={item.title} delay={i * 160}>
                            <article className="flex flex-col items-center gap-5 text-center">
                                <figure
                                    className="relative w-full rounded-[14px] overflow-hidden border border-white/[0.12] bg-white/[0.04]"
                                    style={{
                                        maxWidth: item.maxW,
                                        aspectRatio: `${item.width} / ${item.height}`,
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes={`(max-width: 768px) 100vw, ${item.maxW}px`}
                                        className="object-cover"
                                    />
                                </figure>
                                <div className="space-y-2">
                                    <h3
                                        className="text-white font-extrabold m-0 text-2xl sm:text-3xl"
                                        style={{ letterSpacing: "-0.02em", lineHeight: 1.25 }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-brand-mute m-0 text-base sm:text-lg"
                                        style={{ letterSpacing: "-0.01em", lineHeight: 1.6 }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            </article>
                        </FadeUpWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
