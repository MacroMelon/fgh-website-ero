export default function Header() {
    return (
        <header className="h-20 py-4 px-6 flex flex-row justify-stretch bg-linear-to-b from-[#F1F2FF] to-[#FFFFFF]">
            <img
                className="flex-none self-center"
                src="/logo-long.svg"
                alt="Cool Tether Logo"
            />
            <div className="text-[#3D4EE8] font-bold flex flex-row border-2 gap-12 self-end">
                <a>
                    Getting Started
                </a>
                <a>
                    About Us
                </a>
                <a>
                    Contact Us
                </a>
                <a>
                    Blog
                </a>
                <a>
                    Validation
                </a>
            </div>
        </header>
    )
}
