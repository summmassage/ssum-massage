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

    // 기본값 처리
    const call1 = phones.call1 ?? "010-0000-0000";
    const call2 = phones.call2 ?? "010-0000-0000";

    function handleClick(number: string) {
        if (isMobile) {
            // 모바일: 바로 전화
            window.location.href = `tel:${number}`;
        } else {
            // 데스크톱: 모달로 번호 보여주기
            setSelectedNumber(number);
            setModalOpen(true);
        }
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-10">
                {/* 첫 번째 버튼 */}
                <button
                    onClick={() => handleClick(call1)}
                    aria-label="전화 상담하기"
                    className="btn-call inline-flex items-center gap-2 rounded-2xl px-10 py-6
                           font-semibold text-white cursor-pointer
                           shadow-lg shadow-black/20 ring-1 ring-white/10
                           transition-transform duration-200 hover:scale-[1.02]"
                >
                    <Phone className="h-5 w-5 opacity-90" />
                    <span className="text-base sm:text-lg tracking-tight">전화 상담 1</span>
                </button>

                {/* 두 번째 버튼 */}
                <button
                    onClick={() => handleClick(call2)}
                    aria-label="전화 상담하기"
                    className="btn-call inline-flex items-center gap-2 rounded-2xl px-10 py-6
                           font-semibold text-white cursor-pointer
                           shadow-lg shadow-black/20 ring-1 ring-white/10
                           transition-transform duration-200 hover:scale-[1.02]"
                >
                    <Phone className="h-5 w-5 opacity-90" />
                    <span className="text-base sm:text-lg tracking-tight">전화 상담 2</span>
                </button>
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