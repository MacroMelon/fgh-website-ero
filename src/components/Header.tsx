export default function Header() {
    return (
        <header className="h-32 py-6 pl-6 pr-14 flex flex-row justify-stretch bg-linear-to-b from-[#F1F2FF] to-[#FFFFFF]">
            <a href="/" className="flex-none">
                <img
                    className="self-center h-full"
                    src="/logo-long.svg"
                    alt="Cool Tether Logo"
                />
            </a>
            <div className="text-[#3D4EE8] text-2xl font-instrument-sans font-bold tracking-wide flex flex-row gap-12 ml-auto mb-1 self-end">
                <a href="/getting-started">
                    Getting Started
                </a>
                <a href="/about">
                    About Us
                </a>
                <a href="/contact">
                    Contact Us
                </a>
                <a href="/blog">
                    Blog
                </a>
                <a href="/validation-private">
                    Validation
                </a>
            </div>
        </header>
    )
}
