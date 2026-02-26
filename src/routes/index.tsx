import { createFileRoute } from '@tanstack/react-router'
import deviceImg1 from '../assets/home-page/devices/airpods-pro-birebir-bluetooth-kulaklik-f49-ee 2.png'
import deviceImg2 from '../assets/home-page/devices/image 96 2.png'
import deviceImg3 from '../assets/home-page/devices/img_0197-1729523853862 3.png'
import deviceImg4 from '../assets/home-page/devices/laptop_586 2.png'
import deviceImg5 from '../assets/home-page/devices/mobile-phones-buying-guide 1.png'

import bewareImg from '../assets/home-page/image 137-1.png'

export const Route = createFileRoute('/')({ component: App })

function App() {

    return (
        <div>
            <div className="h-screen flex relative">
                <div className="text-[#3D4EE8] flex flex-col m-auto text-3xl gap-2">
                    <div className="font-[Nico_Moji] mx-auto text-8xl">
                        Teth hsnaker
                    </div>
                    <div className="font-inter tracking-wide pb-40 text-5xl">
                        Stickers with Instant Theft Alerts and Anti-Theft Alarms
                    </div>
                </div>
                <img
                    className="absolute w-96 top-24 left-0"
                    src={deviceImg4}
                    alt = "Laptop"
                />
                <img
                    className="absolute w-[24rem] bottom-0 left-60"
                    src={deviceImg5}
                    alt = "Phone"
                />
                <img
                    className="absolute w-[20rem] bottom-0 right-56"
                    src={deviceImg2}
                    alt = "Bottle"
                />
                <img
                    className="absolute w-[22rem] bottom-35 right-1"
                    src={deviceImg1}
                    alt = "Airpods"
                />
                <img
                    className="absolute w-[22rem] top-10 right-4"
                    src={deviceImg3}
                    alt = "Tab"
                />
            </div>
            <video className="w-screen" controls>
                <source src="/video.mp4" type="video/mp4"/>
                video
            </video>
            <div className="py-72 px-24 gap-12">
                <div className="flex h-[29rem]">
                    <img
                        className="h-full"
                        src={bewareImg}
                        alt="Sign warning people to beware of pickpockets"
                    />
                    <div className="ml-32 flex flex-col">
                        <div className="font-koulen text-[#3D4EE8] tracking-wide text-[4rem]">
                            You are not alone
                        </div>
                        <div className="mt-4 pr-20 text-[2.6rem]/12 tracking-wide font-inter text-[#383838]">
                            Thieves are ever present, and many of us will experience theft at some point, sometimes more than once. It is not something to be ashamed of, but something that invites awareness and care.
                        </div>
                        <div className="flex mt-auto gap-10">
                            <a
                                className="rounded-full flex align-middle justify-center border-5 border-[#555FD0] py-2 px-20"
                            >
                                <div className="font-inter text-[#555FD0] text-4xl pb-1">
                                    Get your Tether
                                </div>
                            </a>
                            <a
                                className="rounded-full flex align-middle justify-center bg-[#394293] py-2 px-7"
                                href="/blog"
                            >
                                <div className="font-inter text-white text-4xl pt-1">
                                    More about pickpocketing
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
