import FadeUpWrapper from "@/component/fadeUpWrapper";
import { courses } from "@/data/data";
import type { Course as CourseT } from "@/data/type";

export default function CourseSection() {
    return (
        <section
            className="py-[88px] sm:py-[110px] relative bg-brand-black"
            id="courses"
        >
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
                                네 가지
                                <br />
                                <span className="text-gold">코스 &amp; 가격</span>
                            </h2>
                        </div>
                        <p
                            className="text-brand-mute"
                            style={{ fontSize: 16, lineHeight: 1.75 }}
                        >
                            건식 타이부터 한국인 스웨디시까지.
                            <br />
                            전화 상담 시 추천 코스를 함께 안내해드립니다.
                        </p>
                    </div>
                </FadeUpWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.map((c, i) => (
                        <FadeUpWrapper key={c.name} delay={60 * i}>
                            <CourseCard data={c} />
                        </FadeUpWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CourseCard({ data }: { data: CourseT }) {
    const isSig = data.badgeStyle === "signature";
    return (
        <article
            className="relative rounded-[14px] p-8 sm:p-9 border transition duration-300 hover:-translate-y-0.5"
            style={{
                background: "var(--brand-graphite)",
                borderColor: isSig ? "rgba(199,154,59,.4)" : "var(--color-border-on-dark)",
            }}
        >
            <header className="flex justify-between items-start gap-4 mb-4">
                <div className="min-w-0">
                    {data.kicker && (
                        <div
                            className="font-display text-brand-mute mb-2"
                            style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}
                        >
                            {data.kicker}
                        </div>
                    )}
                    <h3
                        className="text-white font-extrabold m-0"
                        style={{ fontSize: 26, letterSpacing: "-0.02em", lineHeight: 1.15 }}
                    >
                        {data.name}
                    </h3>
                </div>
                {data.badge && (
                    <span
                        className="font-display font-bold rounded-full shrink-0 px-2.5 py-1.5"
                        style={{
                            fontSize: 10,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            background: "var(--color-accent)",
                            color: "var(--brand-black)",
                            border: "none",
                        }}
                    >
                        {data.badge}
                    </span>
                )}
            </header>

            {data.subtitle && (
                <p className="text-brand-mute mb-7" style={{ fontSize: 15, lineHeight: 1.6 }}>
                    {data.subtitle}
                </p>
            )}

            <table className="w-full border-collapse">
                <tbody>
                    {data.rows.map((row, i) => (
                        <tr key={row.duration} className={i === 0 ? "" : "border-t border-white/[0.12]"}>
                            <td className="py-3.5 text-brand-mute font-medium" style={{ fontSize: 15, width: "38%" }}>
                                {row.duration}
                            </td>
                            <td
                                className="py-3.5 text-right text-white font-display font-semibold"
                                style={{ fontSize: 15, letterSpacing: "-0.005em" }}
                            >
                                {row.price.replace("원", "")}
                                <span className="text-gold ml-0.5 font-medium">원</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p className="mt-3 text-brand-mute" style={{ fontSize: 11, letterSpacing: "0.02em" }}>
                * 표시된 금액은 1인 기준입니다.
            </p>
        </article>
    );
}
