import FadeUpWrapper from "@/component/fadeUpWrapper";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0B0E13] text-white">
            {/* 인트로 섹션 */}
            <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
                {/* 배경 */}
                <div
                    className="absolute inset-0 opacity-40 blur-3xl"
                    style={{
                        background:
                            "radial-gradient(60% 50% at 20% 10%, #34d0ff55 0%, transparent 60%), radial-gradient(50% 40% at 90% 30%, #00ffaa33 0%, transparent 60%)",
                    }}
                />

                {/* 콘텐츠 */}
                <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center space-y-16 mt-15">
                    {/* 메인 타이틀 */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight py-5">
                        썸출장마사지 <span className="text-pink-400">SSUM</span>
                    </h1>

                    {/* 어트랙션 */}
                    <div className="flex flex-col space-y-8">
                        {/* 거리 문구 */}
                        <div className="flex flex-col space-y-3">
                            <p className="text-2xl sm:text-4xl font-bold text-white">
                                서울 · 경기 · 인천{" "}
                                <span className="text-cyan-300">30분 내 도착</span>
                            </p>
                            <p className="text-base sm:text-lg text-gray-400">
                                * 경기 외곽지역 및 피크시간에는 조금 더 시간이 소요될 수 있습니다.
                            </p>
                        </div>

                        {/* 24시간 운영 문구 */}
                        <div>
                            <p className="text-2xl sm:text-4xl font-bold text-white">
                                365일 <span className="text-cyan-300">24시간 운영!</span> 언제든 예약가능
                            </p>
                        </div>

                        {/* 결제 수단 문구 */}
                        <div className="flex flex-col space-y-2">
                            <p className="text-2xl sm:text-4xl font-bold text-white">
                                현금 · 계좌이체 · 카드결제 가능
                            </p>
                            <p className="text-base sm:text-lg text-gray-400">
                                * 카드결제는 부가세 10% 발생합니다
                            </p>
                        </div>
                    </div>

                    {/* 인트로 이미지 */}
                    <div className="flex justify-center">
                        <Image
                            src="/image/홈1.png"
                            alt="홈1"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-lg shadow-black/40"
                        />
                    </div>
                </div>
            </section>

            {/* 관리사 섹션 */}
            <section className="mx-auto max-w-4xl px-6 py-16 space-y-8 mt-15">
                {/* 헤더 영역 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <FadeUpWrapper>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                            한국 · 태국 전원 <span className="text-pink-400">20대</span> 관리사
                        </h2>
                    </FadeUpWrapper>
                    <FadeUpWrapper>
                        <p className="text-gray-400 text-lg">
                            매일 출근인원 30명 이상 · 다양한 스타일
                        </p>
                    </FadeUpWrapper>
                </div>

                {/* 카드 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <FadeUpWrapper>
                        <div className="rounded-2xl bg-gradient-to-br from-black/40 to-black/20 p-6 text-center text-cyan-300 ring-1 ring-cyan-400/30">
                            <span className="text-xl font-semibold">전문 자격증 보유</span>
                        </div>
                    </FadeUpWrapper>

                    <FadeUpWrapper>
                        <div className="rounded-2xl bg-gradient-to-br from-black/40 to-black/20 p-6 text-center text-cyan-300 ring-1 ring-cyan-400/30">
                            <span className="text-xl font-semibold">맞춤형 스타일 배정</span>
                        </div>
                    </FadeUpWrapper>

                    <FadeUpWrapper>
                        <div className="rounded-2xl bg-gradient-to-br from-white/6 to-white/3 p-6 text-center ring-1 ring-white/10 shadow-lg shadow-black/20">
                            <p className="text-2xl font-bold text-pink-400">🏆 만족도 1위</p>
                            <p className="mt-2 text-sm text-gray-300">
                                꾸준한 평가와 피드백 기반의 품질 관리
                            </p>
                        </div>
                    </FadeUpWrapper>

                    <FadeUpWrapper>
                        <div className="rounded-2xl bg-gradient-to-br from-white/6 to-white/3 p-6 text-center ring-1 ring-white/10 shadow-lg shadow-black/20">
                            <p className="text-2xl font-bold text-pink-400">🏆 재방율 1위</p>
                            <p className="mt-2 text-sm text-gray-300">
                                스타일 미팅 후 최적 배정 · 높은 만족도
                            </p>
                        </div>
                    </FadeUpWrapper>
                </div>

                {/* 이미지 */}
                <div className="flex justify-center">
                    <FadeUpWrapper>
                        <Image
                            src="/image/홈2.png"
                            alt="홈2"
                            width={600}
                            height={400}
                            className="object-cover rounded-lg"
                            priority
                        />
                    </FadeUpWrapper>
                </div>

                {/* 신뢰 / 운영 안내 */}
                <div className="pt-8 flex flex-col gap-6 max-w-2xl mx-auto">
                    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 leading-relaxed">
                        <p>
                            관리사는 모두 직접 면접 후 채용하고 있으며, 공인 에이전시를 통한 해외 리크루팅으로
                            외적으로도 실력적으로도 뛰어난 인원으로만 구성되어 있습니다.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 leading-relaxed">
                        <p>
                            <span className="font-semibold text-yellow-400">쓰리아웃 제도</span>를 운영하여
                            지속적인 컴플레인 발생 시 <span className="text-red-500 font-semibold">즉시 퇴출</span>합니다.
                            동시에 새로운 관리사들을 상시 채용하여 서비스 품질을 유지합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 고객 편의 섹션 */}
            <section className="mx-auto max-w-4xl px-6 py-10 space-y-8">
                <div>
                    <p>
                        전화주시면 한분 한분 스타일 미팅 후 배정까지 친절상담 드리겠습니다 ^^
                    </p>
                </div>

                <div>
                    <p>서울/경기/인천 전지역 총알 방문!</p>
                    <p>자택 및 다양한 숙박업소로 방문합니다.</p>
                    <p>
                        1인, 2인, 3인, 4인 등 다인원 출장도 가능합니다.
                        <span className="text-sm text-gray-400 block mt-1">
                          (다인원 출장 시 1인 1배정이며 자택일 경우 따로 방이 나뉘어져
                          있어야 하며 숙박업소일 시 따로 방이 있으셔야 합니다.)
                        </span>
                    </p>
                </div>
            </section>

            {/* 개인정보 보호 섹션 */}
            <section className="mx-auto max-w-4xl px-6 py-10 space-y-8">
                <div>
                    <p className="font-semibold">*안심 DB 번호*</p>
                    <p className="text-sm text-gray-400 mt-2">
                        썸출장안마 &amp; 썸출장마사지는 문의 전화 예약전화 등 이용하셨던
                        분들의 DB를 절대적으로 보호하며 어떠한 광고 문자·전화 등을 드리지
                        않으며 먼저 연락 주시기 전까지 <b>절대 먼저 연락드리는 일 없습니다.</b>{" "}
                        저희를 사칭하는 업체에 유의하세요.
                    </p>
                </div>

                <div className="space-y-2 text-sm text-gray-400">
                    <p> * 예약금 및 보증금을 요구하는 일부 사기업체에 유의하세요 썸출장안마 &amp; 썸출장마사지는 관리사 도착 후 결제입니다. </p>
                    <p> * 관리사들의 이미지를 제공한다며 무단도용된 사진을 쓰는 곳은 사기업체일 가능성이 높습니다. 사기업체에 유의하세요 </p>
                </div>
            </section>

            <footer className="mx-auto max-w-6xl px-6 pb-12 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} 썸출장안마 &amp; 썸출장마사지. All rights
                reserved.
            </footer>
        </div>
    );
}
