export default function Footer() {
    return (
        <footer className="mt-auto self-end px-16 py-10 flex bg-[#222433]">
            <div className="text-white font-instrument-sans text-lg flex flex-col gap-4">
                <a href="/about">
                    About
                </a>
                <a href="/contact">
                    Contact
                </a>
                <a href="/getting-started">
                    Tutorials
                </a>
                <a href="/blog">
                    Blog
                </a>
                <a href="/validation-private">
                    Validation
                </a>
            </div>
            <div className="ml-auto mt-4 w-25 md:w-auto">
                <img
                    src="/logo-long-white.svg"
                    alt="Logo"
                />
            </div>
        </footer>
    )
}
