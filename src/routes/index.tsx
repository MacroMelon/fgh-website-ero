import { createFileRoute } from '@tanstack/react-router'
import deviceImg1 from './../assets/home-page/airpods-pro-birebir-bluetooth-kulaklik-f49-ee 2.png'
import deviceImg2 from './../assets/home-page/image 96 2.png'
import deviceImg3 from './../assets/home-page/img_0197-1729523853862 3.png'
import deviceImg4 from './../assets/home-page/laptop_586 2.png'
import deviceImg5 from './../assets/home-page/mobile-phones-buying-guide 1.png'

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
        </div>
    )
}
