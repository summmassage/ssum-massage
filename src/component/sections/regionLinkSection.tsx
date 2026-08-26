import Link from "next/link";
import { MapPin } from "lucide-react";
import FadeUpWrapper from "@/component/fadeUpWrapper";
import { getDistricts } from "@/data/regionGroups";
import type { Region } from "@/data/regions";

export default function RegionLinkSection({ region }: { region: Region }) {
    const districts = getDistricts(region.slug);
    if (!districts || districts.length === 0) return null;

    return (
        <section
            id="locations"
            aria-labelledby="locations-heading"
            className="py-[72px] sm:py-[96px] bg-brand-ink border-y border-white/[0.08]"
        >
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                <FadeUpWrapper>
                    <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
                        <span
                            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-gold mb-5"
                            style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}
                        >
                            <MapPin className="h-3.5 w-3.5" strokeWidth={2.2} />
                            Locations
                        </span>
                        <h2
                            id="locations-heading"
                            className="text-white font-extrabold m-0"
                            style={{
                                fontSize: "clamp(26px, 4vw, 44px)",
                                lineHeight: 1.15,
                                letterSpacing: "-0.025em",
                            }}
                        >
                            {region.shortName} 지역 선택
                        </h2>
                        <p
                            className="text-brand-mute m-0 mt-4"
                            style={{ fontSize: 15, lineHeight: 1.7, letterSpacing: "-0.01em" }}
                        >
                            {region.name} 전 지역 24시간 출장 가능합니다. 원하시는 지역을 선택해 주세요.
                        </p>
                    </div>
                </FadeUpWrapper>

                <FadeUpWrapper delay={120}>
                    <nav aria-label={`${region.name} 지역 목록`}>
                        <ul className="list-none p-0 m-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
                            {districts.map((r) => (
                                <li key={r.slug}>
                                    <Link
                                        href={`/${r.slug}`}
                                        className="flex items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-4 text-on-dark/85 font-semibold text-center transition-all duration-200 hover:border-gold/50 hover:bg-gold/10 hover:text-gold hover:-translate-y-0.5 active:scale-[.98]"
                                        style={{ fontSize: 15, letterSpacing: "-0.01em" }}
                                    >
                                        {r.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </FadeUpWrapper>
            </div>
        </section>
    );
}
