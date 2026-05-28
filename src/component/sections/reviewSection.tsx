import Image from "next/image";
import FadeUpWrapper from "@/component/fadeUpWrapper";

type Review = {
    region: string;
    image: string;
    text: string;
};

const REVIEWS: Review[] = [
    {
        region: "서울 강남",
        image: "/image/review1.jpg",
        text: "한달에 두세번을 부르기에 이곳저곳 다 불러봤지만 이곳만큼 상담도 친절하시고 잘맞춰주시는곳이 없었습니다. 재방문 예약입니다 !",
    },
    {
        region: "경기 성남",
        image: "/image/review2.jpg",
        text: "자주이용하는 단골입니다. 집에서도 이용하고 친구들집에서도 몇번 부르고 지역도 이곳저곳에서 자주부르는편인데 실망시키지 않는곳이에요. 친구들과도 가끔 같이 부르는데 친구들도 단골된곳입니다ㅎㅎ",
    },
    {
        region: "인천 부평",
        image: "/image/review3.jpg",
        text: "근처 출장왔다 생각나서 검색하다 불러본곳 마음에 들어 예정에도 없던 연장까지^^",
    },
    {
        region: "서울 천호",
        image: "/image/review4.jpg",
        text: "나름 자주 이용하는곳입니다 다른곳들과 번갈아가면서 부르긴 하는데 다른곳은 한번 이용하고말아도 여긴 주기적으로 이용중입니다. 설명도 정확하고 친절하세요",
    },
];

export default function ReviewSection() {
    return (
        <section className="py-[88px] sm:py-[110px] bg-brand-ink" id="reviews">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                <FadeUpWrapper>
                    <div className="flex flex-col items-center text-center gap-6 mb-12 sm:mb-16">
                        <h2
                            className="text-white font-extrabold"
                            style={{
                                fontSize: "clamp(32px, 5vw, 64px)",
                                lineHeight: 1.15,
                                letterSpacing: "-0.025em",
                            }}
                        >
                            수많은 고객들의
                            <br />
                            <span className="text-gold">만족 후기</span>
                        </h2>
                    </div>
                </FadeUpWrapper>

                <div className="flex flex-col gap-5 sm:gap-6">
                    {REVIEWS.map((r, i) => (
                        <FadeUpWrapper key={r.region} delay={i * 80}>
                            <ReviewCard data={r} reverse={i % 2 === 1} />
                        </FadeUpWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ data, reverse = false }: { data: Review; reverse?: boolean }) {
    return (
        <article
            className="rounded-[14px] p-6 sm:p-8 transition duration-300 hover:-translate-y-0.5"
            style={{
                background: "var(--brand-graphite)",
                border: "1px solid var(--color-border-on-dark)",
            }}
        >
            <header className="mb-5">
                <h3
                    className="text-gold font-bold m-0"
                    style={{ fontSize: "clamp(18px, 1.5vw, 22px)", letterSpacing: "-0.01em", lineHeight: 1.3 }}
                >
                    {data.region} 손님후기
                </h3>
            </header>

            <div className={`flex items-start gap-5 sm:gap-6 ${reverse ? "flex-row-reverse" : ""}`}>
                <figure
                    className="relative shrink-0 rounded-[10px] overflow-hidden border border-white/[0.12] bg-white/[0.04]"
                    style={{
                        width: "clamp(96px, 22vw, 160px)",
                        aspectRatio: "1 / 1",
                    }}
                >
                    <Image
                        src={data.image}
                        alt={`${data.region} 손님 후기 이미지`}
                        fill
                        sizes="(max-width: 640px) 30vw, 160px"
                        className="object-cover"
                    />
                </figure>
                <p
                    className="text-white m-0 flex-1"
                    style={{
                        fontSize: "clamp(16px, 1.4vw, 20px)",
                        lineHeight: 1.7,
                        letterSpacing: "-0.005em",
                    }}
                >
                    &lsquo;{data.text}&rsquo;
                </p>
            </div>
        </article>
    );
}
