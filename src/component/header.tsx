const NAV_ITEMS = [
    { label: "관리사", href: "#therapists" },
    { label: "후기", href: "#reviews" },
    { label: "코스", href: "#courses" },
    { label: "FAQ", href: "#faq" },
];

export default function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-40 bg-brand-black/70 backdrop-blur-md border-b border-white/[0.06]">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
                <a
                    href="#"
                    className="font-display font-extrabold text-white leading-none"
                    style={{ fontSize: 26, letterSpacing: "-0.03em" }}
                >
                    SSUM<span className="text-gold">.</span>
                </a>
                <nav aria-label="섹션 바로가기">
                    <ul className="flex items-center gap-4 sm:gap-7">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-on-dark/80 hover:text-white transition-colors font-medium"
                                    style={{ fontSize: 14, letterSpacing: "-0.01em" }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
