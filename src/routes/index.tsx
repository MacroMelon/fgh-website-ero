import { createFileRoute } from '@tanstack/react-router'
import deviceImg1 from '../assets/home-page/first_section/1.png'
import deviceImg2 from '../assets/home-page/first_section/2.png'
import deviceImg3 from '../assets/home-page/first_section/3.png'
import deviceImg4 from '../assets/home-page/first_section/4.png'


export const Route = createFileRoute('/')({ component: App })

const firstSectionImgArray = [deviceImg1, deviceImg2, deviceImg3, deviceImg4]

function App() {

    return (
        <div>
            <div className="flex relative justify-center">
                {firstSectionImgArray.map((image)=> {
                    return (
                        <div className="overflow-hidden">
                            <div className="relative hover:scale-110 transition duration-500 ease-in-out">
                                <img
                                    className=""
                                    src={image}
                                    alt="Tether tag on bank card"
                                >
                                </img>
                                <div className="absolute inset-0 bg-black/64 hover:bg-black/0 transition duration-500 ease-in-out" />
                            </div>
                        </div>
                    );
                })}
                <div className="absolute flex flex-col self-center gap-32 invisible"
                >
                    <div className="text-white text-[6.2rem]/22 mt-24 text-center font-outfit font-bold tracking-wider visible">
                        Theft <br /> Protection <br /> Stickers
                    </div>
                    <div className="m-auto text-white font-[Nico_Moji] text-[2.8rem] text-center visible">
                        Tether
                    </div>
                </div>
            </div>
            <video className="w-screen" controls>
                <source src="/video.mp4" type="video/mp4"/>
                video
            </video>
            <div>

            </div>
        </div>
    )
}
