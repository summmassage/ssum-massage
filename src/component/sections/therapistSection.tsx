import Image from "next/image";
import FadeUpWrapper from "@/component/fadeUpWrapper";

export default function TherapistSection() {
    return (
        <section className="py-[88px] sm:py-[110px]" id="therapists">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                {/* Section heading */}
                <FadeUpWrapper>
                    <div className="flex flex-col items-center text-center gap-6 mb-12 sm:mb-16">
                        <div>
                            <h2
                                className="text-white font-extrabold"
                                style={{
                                    fontSize: "clamp(32px, 5vw, 64px)",
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.025em",
                                }}
                            >
                                한국, 태국
                                <br />
                                <span className="text-gold">전원 20대</span> 관리사
                            </h2>
                        </div>
                        <p
                            className="text-brand-mute"
                            style={{ fontSize: 16, lineHeight: 1.75 }}
                        >
                            매일 30명 이상의 관리사가 출근합니다.
                            <br />
                            모두 직접 면접을 거쳐 채용했으며, 공인 에이전시를 통한 해외 리크루팅으로 외적, 실력적으로 검증된 인원만으로 구성됩니다.
                            <br />
                            한 분 한 분 스타일 미팅 후 최적의 관리사를 배정합니다.
                        </p>
                    </div>
                </FadeUpWrapper>

                <div className="flex flex-col gap-12">
                    {/* Photo card */}
                    <FadeUpWrapper>
                        <Image
                            src="/image/therapists.png"
                            alt="전원 20대 관리사"
                            width={1448}
                            height={1086}
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="mx-auto max-w-full h-auto rounded-[14px] border border-white/[0.12]"
                        />
                    </FadeUpWrapper>

                    {/* Stat cards */}
                    <FadeUpWrapper delay={120}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            <StatCard
                                ribbon="🏆 검증"
                                title="직접 면접 + 공인 에이전시 채용"
                                descNode={
                                    <>
                                        한국, 태국 <strong className="font-semibold" style={{ color: "#6aa6ff" }}>전원 20대</strong>. 모두 직접 면접 후 채용하며, <strong className="text-on-dark font-semibold">공인 에이전시 해외 리크루팅</strong>으로 외적, 실력적으로 검증된 인원만 운영합니다.
                                    </>
                                }
                            />
                            <StatCard
                                ribbon="🏆 만족도"
                                title="피드백 반영 + 쓰리아웃 제도"
                                descNode={
                                    <>
                                        매 회차 받은 피드백을 다음 배정에 반영합니다. 컴플레인 시 <strong className="font-bold" style={{ color: "#ff5a5f" }}>쓰리아웃 즉시 퇴출</strong>, 신규 관리사 상시 채용으로 품질을 유지합니다.
                                    </>
                                }
                            />
                            <StatCard
                                ribbon="🏆 재방율"
                                title="스타일 미팅 후 최적 배정"
                                descNode={
                                    <>
                                        전화 상담 시 <strong className="text-on-dark font-semibold">선호 스타일, 체형, 테라피 유형</strong>을 자세히 청취한 뒤, 다양한 스타일과 체형으로 맞춤 배정합니다.
                                    </>
                                }
                            />
                            <StatCard
                                ribbon="🏆 전문성"
                                title="전문 자격증 + 정기 교육"
                                descNode={
                                    <>
                                        전 인원이 <strong className="text-on-dark font-semibold">전문 자격증</strong>을 보유하고 있으며, 정기 교육을 통해 시술 품질을 일관되게 유지합니다.
                                    </>
                                }
                            />
                        </div>
                    </FadeUpWrapper>
                </div>
            </div>
        </section>
    );
}

function StatCard({
    ribbon,
    title,
    descNode,
}: {
    ribbon?: string;
    title: string;
    descNode: React.ReactNode;
}) {
    return (
        <div
            className="rounded-[14px] p-7 sm:p-9 h-full transition duration-300 hover:-translate-y-0.5"
            style={{
                background: "var(--brand-graphite)",
                border: "1px solid var(--color-border-on-dark)",
            }}
        >
            {ribbon && (
                <div
                    className="text-gold font-display mb-3"
                    style={{ fontSize: "clamp(11px, 0.9vw, 13px)", letterSpacing: "0.2em" }}
                >
                    {ribbon}
                </div>
            )}
            <h5
                className="text-white font-bold m-0 mb-3"
                style={{ fontSize: "clamp(19px, 1.5vw, 24px)", letterSpacing: "-0.01em", lineHeight: 1.35 }}
            >
                {title}
            </h5>
            <p
                className="text-brand-mute m-0"
                style={{ fontSize: "clamp(14px, 1.1vw, 17px)", lineHeight: 1.7 }}
            >
                {descNode}
            </p>
        </div>
    );
}
