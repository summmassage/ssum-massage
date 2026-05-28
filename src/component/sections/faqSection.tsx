"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import FadeUpWrapper from "@/component/fadeUpWrapper";
import { faqs } from "@/data/data";

export default function FaqSection() {
    const [open, setOpen] = useState(0);

    return (
        <section className="py-[88px] sm:py-[110px] bg-brand-ink" id="faq">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                <FadeUpWrapper>
                    <div className="mb-12 sm:mb-16 text-center">
                        <h2
                            className="text-white font-extrabold"
                            style={{
                                fontSize: "clamp(32px, 5vw, 64px)",
                                lineHeight: 1.05,
                                letterSpacing: "-0.025em",
                            }}
                        >
                            자주 묻는 질문
                        </h2>
                    </div>
                </FadeUpWrapper>

                <div className="flex flex-col border-t border-white/[0.12]">
                    {faqs.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={f.q} className="border-b border-white/[0.12]">
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? -1 : i)}
                                    aria-expanded={isOpen}
                                    className="w-full bg-transparent border-0 cursor-pointer text-left grid items-center gap-6 py-7 text-on-dark transition hover:text-gold"
                                    style={{ gridTemplateColumns: "40px 1fr auto" }}
                                >
                                    <span
                                        className="font-display text-gold"
                                        style={{ fontSize: 12, letterSpacing: "0.1em" }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span
                                        className="font-semibold"
                                        style={{ fontSize: 18, letterSpacing: "-0.01em" }}
                                    >
                                        {f.q}
                                    </span>
                                    <span
                                        className="w-8 h-8 rounded-full border border-white/[0.12] grid place-items-center transition-all duration-300"
                                        style={{
                                            transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                                            background: isOpen ? "var(--color-accent)" : "transparent",
                                            color: isOpen ? "var(--brand-black)" : "inherit",
                                            borderColor: isOpen
                                                ? "var(--color-accent)"
                                                : "var(--color-border-on-dark)",
                                        }}
                                    >
                                        <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                                    </span>
                                </button>
                                <div
                                    className="overflow-hidden transition-all duration-500"
                                    style={{
                                        maxHeight: isOpen ? "600px" : "0",
                                        paddingBottom: isOpen ? 28 : 0,
                                        paddingLeft: 64,
                                    }}
                                >
                                    <p
                                        className="text-brand-mute m-0 max-w-[760px] whitespace-pre-line"
                                        style={{ fontSize: 15, lineHeight: 1.8 }}
                                    >
                                        {f.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: faqs.map((faq) => ({
                                "@type": "Question",
                                name: faq.q,
                                acceptedAnswer: { "@type": "Answer", text: faq.a },
                            })),
                        }),
                    }}
                />
            </div>
        </section>
    );
}
