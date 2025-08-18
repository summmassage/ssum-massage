export default function Home() {
    return (
        <div className="min-h-screen bg-[#0B0E13] text-white">
            {/* HERO */}
            <header className="relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-40 blur-3xl"
                    style={{
                        background:
                            "radial-gradient(60% 50% at 20% 10%, #34d0ff55 0%, transparent 60%), radial-gradient(50% 40% at 90% 30%, #00ffaa33 0%, transparent 60%)",
                    }}
                />
                <div className="relative mx-auto max-w-4xl px-6 py-20 flex flex-col space-y-8">
                    {/* 메인 타이틀 */}
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                        썸출장마사지 <span className="text-pink-400">SSUM</span>
                    </h1>

                    {/* 거리 문구 */}
                    <div className="flex flex-col space-y-2">
                        <p className="text-xl sm:text-2xl font-semibold text-white">
                            서울 · 경기 · 인천 30분 내 도착
                        </p>
                        <p className="text-sm sm:text-base text-gray-400">
                            * 경기 외곽지역 및 피크시간에는 조금 더 시간이 소요될 수 있습니다.
                        </p>
                    </div>

                    {/* 24시간 운영 문구 */}
                    <div className="flex flex-col">
                        <p className="text-xl sm:text-2xl font-semibold text-white">
                            365일 24시간 운영! 언제든 예약가능합니다.
                        </p>
                    </div>

                    {/* 결제 수단 문구 */}
                    <div className="flex flex-col space-y-1">
                        <p className="text-xl sm:text-2xl font-semibold text-white">현금 · 계좌이체 · 카드결제 가능</p>
                        <p className="text-sm sm:text-base text-gray-400">
                            * 카드결제는 부가세 10% 발생합니다
                        </p>
                    </div>
                </div>
            </header>

            {/* 본문 섹션 */}
            <main className="mx-auto max-w-4xl px-6 py-8 space-y-8 leading-relaxed text-gray-200">
                <div className="flex flex-col items-center space-y-3">
                    <p className="text-2xl sm:text-4xl font-extrabold text-cyan-400">
                        선입금 ZERO!
                    </p>
                    <p className="text-2xl sm:text-4xl font-extrabold text-cyan-400">
                        출장비 ZERO!
                    </p>
                    <p className="text-2xl sm:text-4xl font-extrabold text-cyan-400">
                        내상 ZERO!
                    </p>
                </div>

                <div>
                    <p>한국 &amp; 태국 전원 20대 관리사</p>
                    <p className="text-sm text-gray-400">
                        (매일 출근인원 30명 이상. 다양한 스타일)
                    </p>
                    <p>관리사들 전문 자격증 보유</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="rounded-lg bg-white/5 p-6 text-center">
                        <p className="text-xl font-bold text-pink-400">🏆 만족도 1위</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-6 text-center">
                        <p className="text-xl font-bold text-pink-400">🏆 재방율 1위</p>
                    </div>
                </div>

                <div>
                    <p className="font-semibold">*안심 DB 번호*</p>
                    <p className="text-sm text-gray-400 mt-2">
                        썸출장안마 &amp; 썸출장마사지는 문의 전화 예약전화 등 이용하셨던
                        분들의 DB를 절대적으로 보호하며 어떠한 광고 문자·전화 등을 드리지
                        않으며 먼저 연락 주시기 전까지 <b>절대 먼저 연락드리는 일 없습니다.</b>{" "}
                        저희를 사칭하는 업체에 유의하세요.
                    </p>
                </div>

                <div className="space-y-2">
                    <p>
                        관리사는 모두 직접 면접 후 채용하고 있으며 공인 에이전시를 통해 해외
                        리쿠트링으로 외적으로도 실력적으로도 뛰어난 관리사들로만 이루어져
                        있습니다.
                    </p>
                    <p>
                        쓰리아웃제도를 실시하여 지속적인 컴플레인 발생 시 해당 관리사는 바로
                        아웃되며 새로운 관리사들을 지속적으로 채용중입니다.
                    </p>
                </div>

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
                <div className="space-y-2 text-sm text-gray-400">
                    <p> * 예약금 및 보증금을 요구하는 일부 사기업체에 유의하세요 썸출장안마 &amp; 썸출장마사지는 관리사 도착 후 결제입니다. </p>
                    <p> * 관리사들의 이미지를 제공한다며 무단도용된 사진을 쓰는 곳은 사기업체일 가능성이 높습니다. 사기업체에 유의하세요 </p>
                </div>
            </main>

            <footer className="mx-auto max-w-6xl px-6 pb-12 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} 썸출장안마 &amp; 썸출장마사지. All rights
                reserved.
            </footer>
        </div>
    );
}
