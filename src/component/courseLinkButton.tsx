import Link from "next/link";

export default function CourseLinkButton() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3 pb-3">
            <Link
                href="/course"
                className="inline-flex items-center justify-center rounded-xl
                 bg-cyan-500 px-20 py-5 font-semibold text-black text-lg
                 shadow-cyan-500/30
                 transition-transform duration-200 hover:scale-105 hover:bg-cyan-400"
            >
                코스 표 보러가기
            </Link>
        </div>
    );
}
