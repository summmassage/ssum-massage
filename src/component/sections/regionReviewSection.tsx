import FadeUpWrapper from "@/component/fadeUpWrapper";
import type { Region } from "@/data/regions";
import { Star } from "lucide-react";

export default function RegionReviewSection({ region }: { region: Region }) {
    return (
        <section className="py-[88px] sm:py-[110px] bg-brand-ink" id="reviews">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
                <FadeUpWrapper>
                    <div className="flex flex-col items-center text-center gap-5 mb-12 sm:mb-16">
                        <h2
                            className="text-white font-extrabold m-0"
                            style={{
                                fontSize: "clamp(32px, 5vw, 64px)",
                                lineHeight: 1.15,
                                letterSpacing: "-0.025em",
                            }}
                        >
                            <span className="text-gold">{region.name}</span> 손님 후기
                        </h2>
                        <p
                            className="text-brand-mute m-0 max-w-2xl"
                            style={{ fontSize: "clamp(14px, 1.1vw, 17px)", lineHeight: 1.7 }}
                        >
                            실제 {region.shortName} 지역에서 이용하신 회원님들이 남겨주신 후기입니다.
                        </p>
                    </div>
                </FadeUpWrapper>

                <div className="flex flex-col gap-5 sm:gap-6">
                    {region.reviews.map((text, i) => (
                        <FadeUpWrapper key={i} delay={i * 80}>
                            <ReviewCard text={text} />
                        </FadeUpWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ text }: { text: string }) {
    return (
        <article
            className="rounded-[14px] p-7 sm:p-9 transition duration-300 hover:-translate-y-0.5"
            style={{
                background: "var(--brand-graphite)",
                border: "1px solid var(--color-border-on-dark)",
            }}
        >
            <div className="flex items-center gap-1 mb-4 sm:mb-5" aria-label="별점 5점 만점에 5점">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-gold"
                        fill="currentColor"
                        strokeWidth={0}
                        aria-hidden
                    />
                ))}
            </div>
            <p
                className="text-white m-0"
                style={{
                    fontSize: "clamp(16px, 1.4vw, 19px)",
                    lineHeight: 1.75,
                    letterSpacing: "-0.005em",
                }}
            >
                {text}
            </p>
        </article>
    );
}
