import Link from "next/link";
import { REGIONS } from "@/data/regions";

const METRO_SLUGS = ["seoul", "gyeonggi", "incheon"] as const;
const GYEONGGI_SLUGS = [
    "gwacheon", "gwangmyeong", "gwangju", "guri", "gunpo", "gimpo",
    "namyangju", "bucheon", "seongnam", "suwon", "siheung", "ansan",
    "anseong", "anyang", "yangju", "osan", "yongin", "uiwang",
    "uijeongbu", "goyang", "paju", "pyeongtaek", "hanam", "hwaseong",
] as const;

const SEOUL_GU = REGIONS
    .filter((r) => !METRO_SLUGS.includes(r.slug as (typeof METRO_SLUGS)[number]) && !GYEONGGI_SLUGS.includes(r.slug as (typeof GYEONGGI_SLUGS)[number]))
    .sort((a, b) => a.name.localeCompare(b.name, "ko"));

const GYEONGGI_CITY = REGIONS
    .filter((r) => GYEONGGI_SLUGS.includes(r.slug as (typeof GYEONGGI_SLUGS)[number]))
    .sort((a, b) => a.name.localeCompare(b.name, "ko"));

export default function Footer() {
    return (
        <footer className="bg-brand-ink border-t border-white/[0.12] pt-20 pb-14">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14">
                    <div>
                        <div
                            className="font-display font-extrabold text-white leading-none mb-4"
                            style={{ fontSize: 56, letterSpacing: "-0.03em" }}
                        >
                            SSUM<span className="text-gold">.</span>
                        </div>
                        <p
                            className="text-brand-mute m-0"
                            style={{ fontSize: 13, lineHeight: 1.75, maxWidth: 420 }}
                        >
                            썸출장마사지, 썸마사지, 썸출장안마, 썸안마.
                            <br />
                            친절하고 고객 친화적인 마사지 서비스를 제공합니다. 만취 상태이시거나 비매너적인
                            행동은 서비스 이용이 제한될 수 있으니 양해 부탁드립니다.
                        </p>
                    </div>

                    <div>
                        <FootHead>SERVICE</FootHead>
                        <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
                            <FootItem>서비스 지역 — 서울 / 경기 / 인천 전 지역</FootItem>
                            <FootItem>운영 시간 — 365일 24시간 (00:00 ~ 23:59)</FootItem>
                            <FootItem>결제 — 100% 후불, 현금 / 계좌 / 카드</FootItem>
                            <FootItem>관리사 — 한국, 태국 전원 20대 / 30명 이상</FootItem>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 pt-10 border-t border-white/[0.08] space-y-8">
                    <FootHead>LOCATIONS</FootHead>

                    {/* 서울 그룹 */}
                    <div>
                        <Link
                            href="/seoul"
                            className="inline-block font-bold text-white hover:text-gold transition-colors mb-3"
                            style={{ fontSize: 14, letterSpacing: "-0.01em" }}
                        >
                            서울
                        </Link>
                        <ul className="list-none p-0 m-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-1.5">
                            {SEOUL_GU.map((r) => (
                                <li key={r.slug}>
                                    <Link
                                        href={`/${r.slug}`}
                                        className="text-brand-mute hover:text-white transition-colors"
                                        style={{ fontSize: 13, lineHeight: 1.9, letterSpacing: "-0.005em" }}
                                    >
                                        {r.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 경기 그룹 */}
                    <div>
                        <Link
                            href="/gyeonggi"
                            className="inline-block font-bold text-white hover:text-gold transition-colors mb-3"
                            style={{ fontSize: 14, letterSpacing: "-0.01em" }}
                        >
                            경기
                        </Link>
                        <ul className="list-none p-0 m-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-1.5">
                            {GYEONGGI_CITY.map((r) => (
                                <li key={r.slug}>
                                    <Link
                                        href={`/${r.slug}`}
                                        className="text-brand-mute hover:text-white transition-colors"
                                        style={{ fontSize: 13, lineHeight: 1.9, letterSpacing: "-0.005em" }}
                                    >
                                        {r.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 인천 */}
                    <div>
                        <Link
                            href="/incheon"
                            className="inline-block font-bold text-white hover:text-gold transition-colors"
                            style={{ fontSize: 14, letterSpacing: "-0.01em" }}
                        >
                            인천
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FootHead({ children }: { children: React.ReactNode }) {
    return (
        <h6
            className="font-display text-gold m-0 mb-4"
            style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
            {children}
        </h6>
    );
}

function FootItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="text-brand-mute m-0" style={{ fontSize: 13, lineHeight: 1.7 }}>
            {children}
        </li>
    );
}
