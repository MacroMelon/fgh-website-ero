export default function Header() {
    return (
        <header className="h-16 py-2 pl-6 pr-8 flex flex-row sticky top-0 z-40 bg-white border-b-2 border-[#3D4EE8]">
            <a href="/" className="flex-none">
                <img
                    className="self-center h-full py-1"
                    src="/logo-long.svg"
                    alt="Cool Tether Logo"
                />
            </a>
            <div className="hidden md:flex md:flex-row text-[#3D4EE8] text-[1.1rem] font-outfit font-bold gap-12 ml-auto mt-2 self-center">
                <a href="/">
                    Home
                </a>
                <a href="/getting-started">
                    Tutorials
                </a>
                <a href="/about">
                    About
                </a>
                <a href="/contact">
                    Contact
                </a>
                <a href="/validation-private">
                    Validation
                </a>
            </div>
        </header>
    )
}
