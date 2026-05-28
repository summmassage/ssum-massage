import FadeUpWrapper from "@/component/fadeUpWrapper";
import PhoneCallButton from "@/component/phonecallButton";

export default function ContactInfoSection() {
    return (
        <section id="contact" className="py-[88px] sm:py-[110px] bg-brand-ink">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                <div className="flex flex-col items-center gap-12 lg:gap-16 text-center">
                    <FadeUpWrapper>
                        <div className="flex flex-col items-center">
                            <h2
                                className="text-white font-extrabold mb-6"
                                style={{
                                    fontSize: "clamp(36px, 5.5vw, 72px)",
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.03em",
                                }}
                            >
                                부담없이 전화주세요
                            </h2>
                            <p className="text-brand-mute m-0 mb-7" style={{ fontSize: 16, lineHeight: 1.8 }}>
                                전화주시면{" "}
                                <strong className="text-on-dark font-semibold">한 분 한 분 스타일 미팅 후 즉시 배정</strong>
                                까지 친절히 상담 드립니다.
                            </p>
                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                <Chip>서울/경기/인천 전지역 총알 방문</Chip>
                                <Chip>자택 및 다양한 숙박업소 방문</Chip>
                                <Chip>1인, 2인, 3인, 4인 다인원 가능</Chip>
                            </div>
                            <div
                                className="rounded-2xl px-6 py-7 sm:px-8 sm:py-8 w-full text-left"
                                style={{
                                    background: "var(--brand-black)",
                                    border: "1px solid var(--color-accent)",
                                }}
                            >
                                <p
                                    className="text-brand-mute m-0 mb-3"
                                    style={{ fontSize: 16, lineHeight: 1.7 }}
                                >
                                    다인원 출장 시{" "}
                                    <strong className="text-gold font-semibold">1인 1배정</strong>입니다.
                                </p>
                                <p
                                    className="text-brand-mute m-0"
                                    style={{ fontSize: 16, lineHeight: 1.7 }}
                                >
                                    자택일 경우{" "}
                                    <strong className="text-gold font-semibold">방이 분리</strong>
                                    되어야 하고, 숙박업소는{" "}
                                    <strong className="text-gold font-semibold">각각의 객실</strong>이 필요합니다.
                                </p>
                            </div>
                        </div>
                    </FadeUpWrapper>

                    <FadeUpWrapper delay={120}>
                        <div className="flex justify-center">
                            <PhoneCallButton />
                        </div>
                    </FadeUpWrapper>
                </div>
            </div>
        </section>
    );
}

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span
            className="px-3.5 py-1.5 rounded-full text-gold"
            style={{
                fontSize: 12,
                letterSpacing: "-0.01em",
                background: "rgba(199, 154, 59, 0.06)",
                border: "1px solid rgba(199, 154, 59, 0.4)",
            }}
        >
            {children}
        </span>
    );
}
