import FadeUpWrapper from "@/component/fadeUpWrapper";
import { HeartHandshake, AlertTriangle } from "lucide-react";

export default function CautionSection() {
    return (
        <section className="py-[88px] sm:py-[110px]" id="caution">
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
                        이용 시 주의사항
                    </h2>

                    {/* Info card */}
                    <div
                        className="rounded-[16px] border px-6 py-6 sm:px-8 sm:py-7 flex items-start gap-4 mb-5"
                        style={{
                            borderColor: "rgba(106, 166, 255, 0.32)",
                            background: "rgba(106, 166, 255, 0.04)",
                        }}
                    >
                        <HeartHandshake
                            className="h-5 w-5 mt-1 shrink-0"
                            style={{ color: "#6aa6ff" }}
                            strokeWidth={2}
                        />
                        <p
                            className="text-brand-mute m-0"
                            style={{ fontSize: 15, lineHeight: 1.85 }}
                        >
                            관리사들도{" "}
                            <strong className="text-white font-bold">사람</strong>이기 때문에,{" "}
                            <strong className="text-white font-bold">친절하게 대해주시면</strong>{" "}
                            더 좋은 서비스로 찾아뵐 수 있습니다. 서로 존중하는 만남이 가장 좋은 만족도로 이어집니다.
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
                            아래 사항을 꼭 확인해 주세요
                        </h3>
                        <ul
                            className="list-disc pl-5 m-0 flex flex-col gap-3 text-brand-mute marker:text-brand-mute"
                            style={{ fontSize: 15, lineHeight: 1.75 }}
                        >
                            <li>
                                가벼운 음주는 괜찮으나,{" "}
                                <strong className="text-white font-bold">과도한 음주 후 만취 상태</strong>의
                                고객님은 안전을 위해 서비스가{" "}
                                <strong className="font-bold" style={{ color: "#ff5a5f" }}>
                                    제한 또는 이용 불가
                                </strong>
                                될 수 있습니다.
                            </li>
                            <li>
                                관리사에게{" "}
                                <strong className="text-white font-bold">폭언, 폭행</strong> 또는{" "}
                                <strong className="text-white font-bold">합의되지 않은 서비스 요구</strong>
                                시{" "}
                                <strong className="font-bold" style={{ color: "#ff5a5f" }}>
                                    강경 대응
                                </strong>
                                하며, 환불 없이 관리사가 즉시 퇴실합니다.
                            </li>
                            <li>
                                <strong className="text-white font-bold">070 인터넷 전화</strong>,{" "}
                                <strong className="text-white font-bold">공중전화</strong>,{" "}
                                <strong className="text-white font-bold">발신자 제한 번호</strong>로는
                                예약을 받지 않습니다.
                            </li>
                        </ul>
                    </div>
                </FadeUpWrapper>
            </div>
        </section>
    );
}
