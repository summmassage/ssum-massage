"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { getPhoneSettings } from "@/lib/api";
import { PhoneSettings } from "@/data/type";
import PhoneModal from "@/component/phoneModal";

export default function PhoneCallButton() {
    const [phones, setPhones] = useState<PhoneSettings>({ call1: null, call2: null });
    const [isMobile, setIsMobile] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState<string>("");

    useEffect(() => {
        (async () => {
            try {
                const settings = await getPhoneSettings();
                setPhones(settings);
            } catch (e) {
                console.error("전화번호 불러오기 실패:", e);
            }
        })();
        const ua = navigator.userAgent.toLowerCase();
        setIsMobile(/iphone|ipad|ipod|android/.test(ua));
    }, []);

    const call1 = phones.call1 ?? "010-0000-0000";
    const call2 = phones.call2 ?? "010-0000-0000";

    function handleClick(number: string) {
        if (isMobile) {
            window.location.href = `tel:${number}`;
        } else {
            setSelectedNumber(number);
            setModalOpen(true);
        }
    }

    return (
        <>
            <div className="flex flex-row gap-3 sm:gap-5 w-full justify-center">
                <PhoneCard label="전화상담 1" onClick={() => handleClick(call1)} />
                <PhoneCard label="전화상담 2" onClick={() => handleClick(call2)} />
            </div>

            <PhoneModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="전화 상담 번호"
                number={selectedNumber}
            />
        </>
    );
}

function PhoneCard({
    label,
    onClick,
}: {
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            className="group cursor-pointer flex-1 max-w-[200px] sm:max-w-none sm:w-[320px] bg-gold text-brand-black rounded-full px-3 py-3 sm:px-5 sm:py-3.5 flex items-center justify-center gap-2 sm:gap-3 font-display font-bold transition hover:bg-gold-600 hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-glow-gold)" }}
        >
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-brand-black text-gold grid place-items-center shrink-0 transition group-hover:scale-105">
                <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.2} />
            </span>
            <span
                className="tracking-tight text-sm sm:text-base whitespace-nowrap"
                style={{ letterSpacing: "-0.01em" }}
            >
                {label}
            </span>
        </button>
    );
}
