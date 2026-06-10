import FadeUpWrapper from "@/component/fadeUpWrapper";
import type { Region } from "@/data/regions";
import { MapPin } from "lucide-react";

export default function RegionHeroSection({ region }: { region: Region }) {
    return (
        <section className="relative bg-brand-black py-[88px] sm:py-[110px] overflow-hidden">
            {/* Soft gold radial accent */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-[0.06]"
                style={{
                    background:
                        "radial-gradient(60% 50% at 50% 0%, var(--brand-gold-500) 0%, transparent 60%)",
                }}
            />

            <div className="mx-auto max-w-4xl px-5 sm:px-8">
                <FadeUpWrapper>
                    <header className="flex flex-col items-center text-center mb-12 sm:mb-16">
                        <span
                            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-gold mb-5"
                            style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}
                        >
                            <MapPin className="h-3.5 w-3.5" strokeWidth={2.2} />
                            {region.shortName} Edition
                        </span>
                        <h2
                            className="text-white font-extrabold m-0"
                            style={{
                                fontSize: "clamp(28px, 4.6vw, 56px)",
                                lineHeight: 1.18,
                                letterSpacing: "-0.025em",
                            }}
                        >
                            {region.promoTitle}
                        </h2>
                    </header>
                </FadeUpWrapper>

                <FadeUpWrapper delay={120}>
                    <div
                        className="rounded-[18px] border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm p-7 sm:p-10"
                        style={{ boxShadow: "0 12px 32px rgba(0, 0, 0, 0.18)" }}
                    >
                        <div className="flex flex-col gap-5 sm:gap-6 text-center">
                            {region.promoText.map((line, i) => (
                                <p
                                    key={i}
                                    className="text-on-dark/85 m-0"
                                    style={{
                                        fontSize: "clamp(15px, 1.2vw, 18px)",
                                        lineHeight: 1.85,
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                </FadeUpWrapper>
            </div>
        </section>
    );
}
