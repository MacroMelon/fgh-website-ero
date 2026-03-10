import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
    component: RouteComponent,
    head: () => ({
        meta: [
            {
                title: "Contact the Tether team"
            },
            {
                property: 'og:title',
                content: "Contact the Tether team"
            }
        ]
    })
})

function RouteComponent() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col bg-[url(/contact/banner.png)] bg-cover aspect-4311/759 min-h-50 text-center xl:text-left xl:pl-40 pb-10 font-outfit text-big text-white justify-end">
                Contact Us
            </div>
            <form className="mx-auto mt-24 mb-52">
                <div className="flex flex-col xl:flex-row gap-0 xl:gap-12">
                    <label className=" my-4 xl:w-1/3 font-bold font-inter text-[1.5rem]">
                        <div>First Name</div>
                        <input
                            className="mt-2 border-2 border-[#3D4EE8] rounded-xl"
                            type="text"
                        />
                    </label>
                    <label className=" my-4 xl:w-1/3 font-bold font-inter text-[1.5rem]">
                        <div>Family Name</div>
                        <input
                            className="mt-2 border-2 border-[#3D4EE8] rounded-xl"
                            type="text"
                        />
                    </label>
                    <label className=" my-4 xl:w-1/3 font-bold font-inter text-[1.5rem]">
                        <div>Organisation</div>
                        <input
                            className="mt-2 border-2 border-[#3D4EE8] rounded-xl"
                            type="text"
                        />
                    </label>
                </div>
                <div className="flex flex-col xl:flex-row gap-0 xl:gap-12">
                    <label className=" my-4 xl:w-2/3 font-bold font-inter text-[1.5rem]">
                        <div>Email</div>
                        <input
                            className="mt-2 w-full border-2 border-[#3D4EE8] rounded-xl"
                            type="email"
                        />
                    </label>
                    <label className=" my-4 xl:w-1/3 font-bold font-inter text-[1.5rem]">
                        <div>Phone number</div>
                        <input
                            className="mt-2 border-2 border-[#3D4EE8] rounded-xl"
                            type="tel"
                        />
                    </label>
                </div>
                <div>
                    <label className=" my-4 font-bold font-inter text-[1.5rem]">
                        <div>Message</div>
                        <input
                            className="mt-2 w-full h-96 border-2 border-[#3D4EE8] rounded-xl"
                            type="text"
                        />
                    </label>
                </div>
                <button
                    className="mt-16 rounded-full py-2 w-52 bg-[#3D4EE8] text-white font-inter font-bold text-[1.5rem] text-center"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
