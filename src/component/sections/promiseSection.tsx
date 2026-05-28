import FadeUpWrapper from "@/component/fadeUpWrapper";
import { ShieldCheck, AlertTriangle } from "lucide-react";

export default function PromiseSection() {
    return (
        <section className="py-[88px] sm:py-[110px]" id="promise">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                <FadeUpWrapper>
                    <h2
                        className="text-white font-extrabold mb-8 sm:mb-10 text-center"
                        style={{
                            fontSize: "clamp(26px, 3.4vw, 40px)",
                            lineHeight: 1.25,
                            letterSpacing: "-0.025em",
                        }}
                    >
                        안심 DB 번호 — 먼저 연락드리는 일은{" "}
                        <span style={{ color: "#ff5a5f" }}>절대 없습니다</span>
                    </h2>

                    {/* Info card */}
                    <div
                        className="rounded-[16px] border px-6 py-6 sm:px-8 sm:py-7 flex items-start gap-4 mb-5"
                        style={{
                            borderColor: "rgba(106, 166, 255, 0.32)",
                            background: "rgba(106, 166, 255, 0.04)",
                        }}
                    >
                        <ShieldCheck
                            className="h-5 w-5 mt-1 shrink-0"
                            style={{ color: "#6aa6ff" }}
                            strokeWidth={2}
                        />
                        <p
                            className="text-brand-mute m-0"
                            style={{ fontSize: 15, lineHeight: 1.85 }}
                        >
                            썸출장안마 &amp; 썸출장마사지는 문의/예약 전화를 이용하신 고객님의 DB를{" "}
                            <strong className="text-white font-bold">철저히 보호</strong>합니다. 어떠한
                            광고 문자, 전화를 보내지 않으며, 고객님께서 먼저 연락 주시기 전까지{" "}
                            <strong className="text-white font-bold">절대</strong> 먼저 연락드리는 일은
                            없습니다. 사칭 업체에 유의해 주세요.
                        </p>
                    </div>

                    {/* Warning card */}
                    <div
                        className="rounded-[16px] border px-6 py-6 sm:px-8 sm:py-7"
                        style={{
                            borderColor: "rgba(255, 90, 95, 0.32)",
                            background: "rgba(255, 90, 95, 0.04)",
                        }}
                    >
                        <h3
                            className="flex items-center gap-2 m-0 mb-4 font-bold"
                            style={{ color: "#ff5a5f", fontSize: 16, letterSpacing: "-0.01em" }}
                        >
                            <AlertTriangle className="h-4 w-4" strokeWidth={2.4} />
                            아래 사항을 꼭 확인하세요
                        </h3>
                        <ul
                            className="list-disc pl-5 m-0 flex flex-col gap-3 text-brand-mute marker:text-brand-mute"
                            style={{ fontSize: 15, lineHeight: 1.75 }}
                        >
                            <li>
                                <strong className="text-white font-bold">
                                    예약금/보증금 요구
                                </strong>
                                시, 사기업체일 가능성이 높습니다. 썸출장안마 &amp; 썸출장마사지는{" "}
                                <strong className="text-gold font-bold">
                                    관리사 도착 후 결제(후불제)
                                </strong>
                                입니다.
                            </li>
                            <li>
                                관리사 이미지를 제공한다며{" "}
                                <strong className="text-white font-bold">무단 도용 사진</strong>을
                                사용하는 곳에 유의하세요.
                            </li>
                        </ul>
                    </div>
                </FadeUpWrapper>
            </div>
        </section>
    );
}
