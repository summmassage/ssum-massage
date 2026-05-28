"use client";

import { Phone } from "lucide-react";

export default function FloatingPhoneButton() {
    function handleClick() {
        const el = document.getElementById("contact");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label="전화 상담 섹션으로 이동"
            className="group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 cursor-pointer flex items-center gap-3 bg-gold text-brand-black rounded-full pl-4 pr-5 py-3 sm:pl-5 sm:pr-6 sm:py-4 font-display font-bold transition-all duration-300 hover:bg-gold-600 hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-glow-gold)" }}
        >
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-black text-gold grid place-items-center shrink-0 transition group-hover:scale-105">
                <Phone className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <span
                className="tracking-tight"
                style={{ fontSize: 15, letterSpacing: "-0.01em" }}
            >
                전화상담
            </span>
        </button>
    );
}
