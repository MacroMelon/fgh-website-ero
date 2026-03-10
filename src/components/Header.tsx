import {useState} from "react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="h-16 py-2 pl-6 pr-8 flex flex-row sticky top-0 z-40 bg-white border-b-2 border-[#3D4EE8]">
            <a href="/" className="flex-none">
                <img
                    className="self-center h-full py-1"
                    src="/logo-long.svg"
                    alt="Cool Tether Logo"
                />
            </a>
            <div className="md:hidden ml-auto mt-2 self-center">
                <button
                    className="justify-self-start ml-16"
                    onClick={()=> { setMenuOpen(!menuOpen);}}
                >
                    <div className={"font-outfit px-2 text-small font-bold text-[#3D4EE8] transition duration-100 active:scale-95 " + (menuOpen ? "border-3" : "border-0")}>
                        Menu
                    </div>
                </button>
            </div>
            <div className={"absolute md:static flex flex-col top-12 right-3 p-6 md:p-0 border-2 border-[#3D4EE8] md:border-none md:bg-none bg-white  md:flex md:flex-row text-[#3D4EE8] text-[1.4rem] font-outfit font-bold gap-12 ml-auto mt-2 self-center" + (menuOpen ? " absolute" : " hidden")}>
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
        </header>
    )
}
