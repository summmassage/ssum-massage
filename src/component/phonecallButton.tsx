import {Phone} from "lucide-react";

export default function PhoneCallButton() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-10">
            {/* 첫 번째 버튼 */}
            <a
                href="tel:010-0000-0000"
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
                href="tel:010-1111-1111"
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