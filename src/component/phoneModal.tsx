"use client";

import { useEffect, useRef, useState } from "react";
import { X, Copy, Phone } from "lucide-react";

interface PhoneModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    number: string;
}

export default function PhoneModal({
    open,
    onClose,
    title = "상담 전화 번호",
    number,
}: PhoneModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        function handler(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        if (open) {
            document.addEventListener("keydown", handler);
            const t = setTimeout(() => closeBtnRef.current?.focus(), 0);
            return () => {
                document.removeEventListener("keydown", handler);
                clearTimeout(t);
            };
        }
    }, [open, onClose]);

    function handleBackdrop(e: React.MouseEvent) {
        if (e.target === dialogRef.current) onClose();
    }

    async function copyNumber() {
        try {
            await navigator.clipboard.writeText(number);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            const temp = document.createElement("input");
            temp.value = number;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand("copy");
            document.body.removeChild(temp);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
    }

    if (!open) return null;

    return (
        <div
            ref={dialogRef}
            onMouseDown={handleBackdrop}
            className="fixed inset-0 z-[1000] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,.65)", backdropFilter: "blur(10px)" }}
            aria-modal="true"
            role="dialog"
            aria-labelledby="phone-modal-title"
        >
            <div
                className="mx-4 w-full max-w-md bg-brand-graphite border border-white/[0.12] rounded-[20px] text-white text-center px-5 pt-8 pb-7 sm:px-9 sm:pt-10 sm:pb-8"
                style={{ boxShadow: "0 30px 80px rgba(0,0,0,.6)" }}
            >
                <div className="ds-pulse w-24 h-24 rounded-full bg-gold text-brand-black grid place-items-center mx-auto mb-5">
                    <Phone className="h-9 w-9" strokeWidth={2.2} />
                </div>
                <h4
                    id="phone-modal-title"
                    className="text-white font-bold m-0 mb-2"
                    style={{ fontSize: 22, letterSpacing: "-0.02em" }}
                >
                    {title}
                </h4>
                <p className="text-brand-mute m-0 mb-6" style={{ fontSize: 14 }}>
                    아래 번호로 연락 주세요. 한 분 한 분 스타일 미팅 후 배정해드립니다.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-[14px] bg-white/[0.06] border border-white/[0.12] px-4 py-4 sm:px-5 mb-5">
                    <div
                        className="text-center sm:text-left text-white font-display font-bold truncate min-w-0 flex-1"
                        style={{ fontSize: 20, letterSpacing: "-0.01em" }}
                    >
                        {number}
                    </div>
                    <button
                        onClick={copyNumber}
                        className="cursor-pointer inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold bg-gold text-brand-black hover:bg-gold-600 transition shrink-0"
                    >
                        <Copy className="h-3.5 w-3.5" />
                        {copied ? "복사됨" : "복사"}
                    </button>
                </div>

                <button
                    ref={closeBtnRef}
                    onClick={onClose}
                    aria-label="닫기"
                    className="cursor-pointer inline-flex items-center gap-1.5 bg-transparent border border-white/[0.12] text-brand-mute px-6 py-2.5 rounded-full hover:text-on-dark hover:border-white/30 transition"
                    style={{ fontSize: 13 }}
                >
                    <X className="h-3.5 w-3.5" />
                    닫기
                </button>
            </div>
        </div>
    );
}
