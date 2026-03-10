import { createFileRoute } from '@tanstack/react-router'

import squiglyText from "@/assets/join-beta/squigly_text.svg"
import circleText from "@/assets/join-beta/half_circle_text.svg"

export const Route = createFileRoute('/join-beta')({
    component: RouteComponent,
    head: () => ({
        meta: [
            {
                title: "Join the tether Beta"
            },
            {
                property: 'og:title',
                content: "Join the tether Beta"
            },
        ]
    })
})

const JoinForm = () => (
    <form className="flex flex-col mx-auto mt-20 mb-8 w-2/3 gap-1">
        <label className=" my-4 font-bold font-inter text-[1.5rem]">
            <div>Email Address *</div>
            <input
                className="w-full border-2 border-[#3D4EE8] rounded-lg"
                type="email"
            />
        </label>
        <label className=" my-4 font-bold font-inter text-[1.5rem]">
            <div>Contact Name</div>
            <input
                className="w-full border-2 border-[#3D4EE8] rounded-lg"
                type="text"
            />
        </label>
        <label className=" my-4 font-bold font-inter text-[1.5rem]">
            <div>Phone number</div>
            <input
                className="w-full border-2 border-[#3D4EE8] rounded-lg"
                type="tel"
            />
        </label>
        <label className=" my-4 font-bold font-inter text-[1.5rem]">
            <div>How many Tether Stickers do you like? *</div>
            <input
                className="w-full border-2 border-[#3D4EE8] rounded-lg"
                type="number"
            />
        </label>
        <label className=" my-4 font-bold font-inter text-[1.5rem]">
            <div>Other information</div>
            <input
                className="w-full h-32 border-2 border-[#3D4EE8] rounded-lg"
                type="text"
            />
        </label>
        <label className=" my-4 font-bold font-inter text-[1.5rem]">
            <div>How did you hear from us?</div>
            <input
                className="w-full h-32 border-2 border-[#3D4EE8] rounded-lg"
                type="text"
            />
        </label>
        <button
            className="mt-6 rounded-full py-2 w-52 bg-[#3D4EE8] text-white font-inter font-bold text-[1.5rem] text-center"
            type="submit"
        >
            Submit
        </button>
    </form>
)

function RouteComponent() {
    return (
        <div>
            <div className="flex h-65 lg:h-auto bg-[url(/join-beta/banner_bg.png)] bg-cover lg:bg-size-[133.5%] lg:bg-position-[right_top_3.2%]">
                <div className="flex size-full bg-linear-to-b from-[#A9A9A9]/32 to-[#01031D]/32 ">
                    <img
                        className="hidden lg:block w-1/2 pl-24 mb-26"
                        src={squiglyText}
                    />
                    <img
                        className="lg:hidden px-2"
                        src={circleText}
                    />
                    <div className="hidden lg:block w-1/2 mt-10 ml-40 bg-white rounded-tl-xl">
                        <JoinForm />
                    </div>
                </div>
            </div>
            <div className="block lg:hidden mt-10 bg-white rounded-tl-xl">
                <JoinForm />
            </div>
        </div>
    )
}
