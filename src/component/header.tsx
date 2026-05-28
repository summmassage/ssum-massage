export default function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-40 bg-brand-black/70 backdrop-blur-md border-b border-white/[0.06]">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 sm:h-18 flex items-center">
                <a
                    href="#"
                    className="font-display font-extrabold text-white leading-none"
                    style={{ fontSize: 26, letterSpacing: "-0.03em" }}
                >
                    SSUM<span className="text-gold">.</span>
                </a>
            </div>
        </header>
    );
}
