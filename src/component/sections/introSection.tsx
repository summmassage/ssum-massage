import Image from "next/image";
import FadeUpWrapper from "@/component/fadeUpWrapper";
import { Phone, ArrowRight } from "lucide-react";

type Props = { highlightWord?: string };

export default function IntroSection({ highlightWord = "프리미엄" }: Props) {
    return (
        <section className="relative overflow-hidden isolate bg-brand-black pt-30 pb-8 sm:pt-35 sm:pb-24">
            {/* Background image — starts below fixed header so the top of the image isn't covered */}
            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 top-16 sm:top-18 -z-20 overflow-hidden"
            >
                <Image
                    src="/image/massage_profile.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[70%_center]"
                />
                {/* Horizontal dark gradient — darker on left for text legibility, clear on right for image */}
                <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent"
                />
                {/* Bottom fade — blend into next section */}
                <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black"
                />
            </div>

            <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
                <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_.9fr] lg:gap-16">
                    {/* Left: h1 + stats + CTAs (right column intentionally empty so the bg image shows) */}
                    <FadeUpWrapper>
                        <div>
                            <h1
                                className="text-white mb-5 font-extrabold"
                                style={{
                                    fontSize: "clamp(36px, 6.4vw, 80px)",
                                    lineHeight: 1.04,
                                    letterSpacing: "-0.025em",
                                }}
                            >
                                전화 한 통이면
                                <br />
                                <span
                                    className="text-gold font-display font-bold"
                                    style={{ letterSpacing: "-0.015em" }}
                                >
                                    30분 내
                                </span>{" "}
                                도착하는
                                <br />
                                <span
                                    className="text-gold font-display font-bold"
                                    style={{ letterSpacing: "-0.015em" }}
                                >
                                    {highlightWord}
                                </span>
                                <br />
                                출장마사지
                            </h1>

                            <aside className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                                <HeroStat num="30" unit="분" lbl={<>서울, 경기, 인천<br />전 지역 도착</>} sub="경기 외곽, 피크시간 다소 소요" />
                                <HeroStat num="24" unit="h" lbl={<>365일 24시간<br />언제든 예약</>} sub="00:00 ~ 23:59 연중무휴" />
                                <HeroStat num="100" unit="%" lbl={<>후불제<br />예약금 없음</>} sub="현금, 계좌, 카드 모두 가능" />
                            </aside>

                            <div className="flex flex-wrap items-center gap-3.5 mt-9">
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-gold text-brand-black font-bold transition-all duration-300 hover:bg-gold-600 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-gold)] active:scale-[.98]"
                                    style={{ fontSize: 15, letterSpacing: "-0.01em" }}
                                >
                                    <Phone className="h-4 w-4 transition group-hover:scale-110" strokeWidth={2.2} />
                                     전화상담
                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                </a>
                                <a
                                    href="#courses"
                                    className="group inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-transparent text-on-dark font-semibold border border-white/20 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/30 hover:-translate-y-0.5"
                                    style={{ fontSize: 15 }}
                                >
                                    코스 살펴보기
                                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        </div>
                    </FadeUpWrapper>
                </div>
            </div>
        </section>
    );
}

function HeroStat({
    num,
    unit,
    lbl,
    sub,
}: {
    num: string;
    unit: string;
    lbl: React.ReactNode;
    sub: string;
}) {
    return (
        <div className="flex flex-col rounded-xl sm:rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-3 sm:p-6">
            <div
                className="text-gold font-display font-bold leading-none mb-2 sm:mb-4 text-[26px] sm:text-[44px]"
                style={{ letterSpacing: "-0.01em" }}
            >
                {num}
                <small className="text-brand-mute font-medium ml-0.5 text-[12px] sm:text-[18px]">
                    {unit}
                </small>
            </div>
            <div
                className="text-on-dark font-semibold mb-1 sm:mb-2 text-[12px] sm:text-[18px]"
                style={{ letterSpacing: "-0.01em", lineHeight: 1.4 }}
            >
                {lbl}
            </div>
            <div className="hidden sm:block text-brand-mute text-[10px] sm:text-[14px]" style={{ lineHeight: 1.55 }}>
                {sub}
            </div>
        </div>
    );
}
