"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { getPhoneSettings } from "@/lib/api";
import { PhoneSettings } from "@/data/type";

export default function PhoneCallButton() {
    const [phones, setPhones] = useState<PhoneSettings>({ call1: null, call2: null });

    useEffect(() => {
        (async () => {
            try {
                const settings = await getPhoneSettings();
                setPhones(settings);
            } catch (e) {
                console.error("전화번호 불러오기 실패:", e);
            }
        })();
    }, []);

    // 기본값 처리
    const call1 = phones.call1 ?? "010-0000-0000";
    const call2 = phones.call2 ?? "010-0000-0000";

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-10">
            {/* 첫 번째 버튼 */}
            <a
                href={`tel:${call1}`}
                aria-label="전화 상담하기"
                className="btn-call inline-flex items-center gap-2 rounded-2xl px-10 py-6
                           font-semibold text-white
                           shadow-lg shadow-black/20 ring-1 ring-white/10
                           transition-transform duration-200 hover:scale-[1.02]"
            >
                <Phone className="h-5 w-5 opacity-90" />
                <span className="text-base sm:text-lg tracking-tight">전화 상담 1</span>
            </a>

            {/* 두 번째 버튼 */}
            <a
                href={`tel:${call2}`}
                aria-label="전화 상담하기"
                className="btn-call inline-flex items-center gap-2 rounded-2xl px-10 py-6
                           font-semibold text-white
                           shadow-lg shadow-black/20 ring-1 ring-white/10
                           transition-transform duration-200 hover:scale-[1.02]"
            >
                <Phone className="h-5 w-5 opacity-90" />
                <span className="text-base sm:text-lg tracking-tight">전화 상담 2</span>
            </a>
        </div>
    );
}