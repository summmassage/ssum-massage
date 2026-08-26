"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const METRO_ITEMS = [
    { label: "서울", href: "/seoul" },
    { label: "경기", href: "/gyeonggi" },
    { label: "인천", href: "/incheon" },
];

const NAV_ITEMS = [
    { label: "관리사", href: "#therapists" },
    { label: "후기", href: "#reviews" },
    { label: "코스", href: "#courses" },
    { label: "FAQ", href: "#faq" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <header className="fixed top-0 inset-x-0 z-40 bg-brand-black/70 backdrop-blur-md border-b border-white/[0.06]">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between md:grid md:grid-cols-[auto_1fr_auto] gap-4 sm:gap-8">
                {/* Left: logo */}
                <Link
                    href="/"
                    onClick={close}
                    className="font-display font-extrabold text-white leading-none"
                    style={{ fontSize: 26, letterSpacing: "-0.03em" }}
                >
                    SSUM<span className="text-gold">.</span>
                </Link>

                {/* Center: region menu (desktop only) — 권역 페이지로만 이동 */}
                <nav
                    aria-label="지역 메뉴"
                    className="hidden md:flex items-center justify-center gap-6 sm:gap-8"
                >
                    {METRO_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-on-dark/80 hover:text-white transition-colors font-medium py-2"
                            style={{ fontSize: 16, letterSpacing: "-0.01em" }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right: anchor menu (desktop only) */}
                <nav aria-label="섹션 바로가기" className="hidden md:block">
                    <ul className="flex items-center gap-4 sm:gap-6 list-none m-0 p-0">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-on-dark/80 hover:text-white transition-colors font-medium"
                                    style={{ fontSize: 16, letterSpacing: "-0.01em" }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile: hamburger button */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-white cursor-pointer"
                    aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? <X className="h-6 w-6" strokeWidth={2.2} /> : <Menu className="h-6 w-6" strokeWidth={2.2} />}
                </button>
            </div>

            {/* Mobile: dropdown panel */}
            {open && (
                <div
                    id="mobile-menu"
                    className="md:hidden border-t border-white/[0.06] bg-brand-black/95 backdrop-blur-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
                >
                    <div className="mx-auto max-w-6xl px-5 py-6">
                        {/* 지역 section — 권역 3개만 */}
                        <section>
                            <h3
                                className="font-display text-gold m-0 mb-3"
                                style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}
                            >
                                지역
                            </h3>
                            <ul className="list-none p-0 m-0">
                                {METRO_ITEMS.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={close}
                                            className="block py-2 text-white font-bold"
                                            style={{ fontSize: 16, letterSpacing: "-0.01em" }}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* 바로가기 section */}
                        <section className="mt-6 pt-5 border-t border-white/[0.06]">
                            <h3
                                className="font-display text-gold m-0 mb-3"
                                style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}
                            >
                                바로가기
                            </h3>
                            <ul className="list-none p-0 m-0">
                                {NAV_ITEMS.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={close}
                                            className="block py-2 text-on-dark/85 hover:text-white transition-colors"
                                            style={{ fontSize: 16, letterSpacing: "-0.01em" }}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            )}
        </header>
    );
}
