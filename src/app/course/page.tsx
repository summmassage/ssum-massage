import FadeUpWrapper from "@/component/fadeUpWrapper";
import PhoneCallButton from "@/component/phonecallButton";
import HomeLinkButton from "@/component/homeLinkButton";

type Row = { duration: string; price: string };
type Course = { name: string; subtitle?: string; rows: Row[]; badge?: string };

const courses: Course[] = [
    {
        name: "썸 건식 타이",
        rows: [
            { duration: "60분", price: "70,000원" },
            { duration: "90분", price: "90,000원" },
            { duration: "120분", price: "110,000원" },
        ],
    },
    {
        name: "썸 아로마 & 오일힐링",
        rows: [
            { duration: "60분", price: "90,000원" },
            { duration: "90분", price: "110,000원" },
            { duration: "120분", price: "130,000원" },
        ],
        badge: "인기",
    },
    {
        name: "썸 VVIP 전신혼합 테라피",
        rows: [
            { duration: "60분", price: "110,000원" },
            { duration: "90분", price: "130,000원" },
            { duration: "120분", price: "150,000원" },
            { duration: "150분", price: "180,000원" },
        ],
        badge: "시그니처",
    },
    {
        name: "썸 한국인 스웨디시",
        rows: [
            { duration: "60분", price: "150,000원" },
            { duration: "90분", price: "190,000원" },
        ],
    },
];

export default function CoursePage() {
    return (
        <div className="min-h-screen bg-[#0B0E13] text-white">
            {/* 헤더 */}
            <section className="relative overflow-hidden py-2">
                <div
                    className="absolute inset-0 opacity-40 blur-3xl pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(60% 50% at 20% 10%, #34d0ff55 0%, transparent 60%), radial-gradient(50% 40% at 90% 30%, #00ffaa33 0%, transparent 60%)",
                    }}
                />

                <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 pb-8">
                    {/* 헤더와 버튼을 같은 flex 라인에 배치 */}
                    <div className="flex items-center justify-between">
                        <FadeUpWrapper>
                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                                <span className="text-pink-400">SSUM</span> 코스 & 가격
                            </h1>
                        </FadeUpWrapper>

                        {/* 오른쪽 버튼 */}
                        <HomeLinkButton />
                    </div>

                    <FadeUpWrapper delay={80}>
                        <p className="mt-3 text-gray-300">
                            서울 · 경기 · 인천 <span className="text-cyan-300 font-semibold">30분 내 도착</span>
                            <br />
                            <span className="font-semibold">현금 · 계좌이체 · 카드 결제 가능</span>
                            <span className="text-gray-400"> (카드 결제 시 부가세 10%)</span>
                        </p>
                    </FadeUpWrapper>
                </div>
            </section>

            {/* 표 섹션 */}
            <section className="relative z-10 mx-auto max-w-4xl px-6 pb-10 space-y-3">
                <div className="grid grid-cols-1 gap-8">
                    {courses.map((course, idx) => (
                        <FadeUpWrapper key={course.name} delay={60 * (idx + 1)}>
                            <div className="rounded-2xl bg-gradient-to-br from-white/6 to-white/3 ring-1 ring-white/10 shadow-lg shadow-black/20">
                                {/* 타이틀 바 */}
                                <div className="flex items-center justify-between px-6 py-5 border-white/10">
                                    <div>
                                        <h2 className="text-2xl font-extrabold tracking-tight">
                                            {course.name}
                                        </h2>
                                        {course.subtitle && (
                                            <p className="text-sm text-gray-400 mt-1">{course.subtitle}</p>
                                        )}
                                    </div>
                                        {course.badge && (
                                            <span className="rounded-xl bg-pink-500/20 text-pink-300 text-xs font-semibold px-3 py-1 ring-1 ring-pink-400/40">
                                        {course.badge}
                                    </span>
                                    )}
                                </div>

                                {/* 표 */}
                                <div className="px-2 pb-4 sm:px-6 sm:pb-6">
                                    <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                                        <table className="min-w-full divide-y divide-white/10">
                                            <thead className="bg-white/5">
                                            <tr>
                                                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-gray-200">
                                                    코스 시간
                                                </th>
                                                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-gray-200">
                                                    가격
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/10">
                                            {course.rows.map((row, i) => (
                                                <tr
                                                    key={`${course.name}-${row.duration}`}
                                                    className={i % 2 === 0 ? "bg-white/0" : "bg-white/[0.03]"}
                                                >
                                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                                        {row.duration}
                                                    </td>
                                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                                        {row.price}
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* 안내 문구 */}
                                    <p className="mt-3 text-xs sm:text-sm text-gray-400">
                                        * 표시된 금액은 1인 기준입니다.
                                    </p>
                                </div>
                            </div>
                        </FadeUpWrapper>
                    ))}
                </div>

                {/* CTA */}
                <PhoneCallButton />

                <div>
                    <HomeLinkButton />
                </div>

            </section>

            <footer className="mx-auto max-w-6xl px-6 pb-12 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} 썸출장안마 &amp; 썸출장마사지. All rights reserved.
            </footer>
        </div>
    );
}
