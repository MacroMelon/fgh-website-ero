import { createFileRoute } from '@tanstack/react-router'
import deviceImg1 from '../assets/home-page/first_section/1.png'
import deviceImg2 from '../assets/home-page/first_section/2.png'
import deviceImg3 from '../assets/home-page/first_section/3.png'
import deviceImg4 from '../assets/home-page/first_section/4.png'

import middleImage from '../assets/home-page/middle_image.png'


export const Route = createFileRoute('/')({ component: App })

const firstSectionImgArray = [deviceImg1, deviceImg2, deviceImg3, deviceImg4]

function App() {

    return (
        <div>
            <div className="md:flex grid grid-cols-2 grid-rows-2 relative justify-center">
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
                <div className="absolute flex flex-col self-center gap-24 invisible"
                >
                    <div className="text-white text-[6.2rem]/20 text-center font-outfit font-bold tracking-wider visible">
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
            <div className="flex flex-col md:flex-row md:h-120 text-black text-[1.6rem] md:text-[3rem]/12 font-outfit font-bold md:font-normal mx-8 md:mx-14 md:my-40 my-24">
                <div className="flex md:flex-col gap-12">
                    <p>
                        1. <span className="md:font-bold">Immediate</span> Theft detection
                    </p>
                    <p className="text-right md:text-left ml-auto md:mt-auto">
                        2. Automatic <span className="md:font-bold">Anti-Theft Alarm</span>
                    </p>
                </div>
                <img
                    className="my-12 md:my-0 md:p-6 md:pl-24 md:pr-18"
                    src={middleImage}
                    alt="An image of the tether tag while bent with the the words: Tether tags, A 2mm thick theft protection sticker."
                />
                <div className="flex md:flex-col gap-12">
                    <p className="md:text-right">
                        3. <span className="md:font-bold">Strong adhesion</span> to belongings
                    </p>
                    <p className="text-right ml-auto md:mt-auto">
                        4. <span className="md:font-bold">Bendable</span> to fit different surfaces
                    </p>
                </div>
            </div>
            <div className="mx-14 my-12 gap-32">
                <div className="flex md:h-[30rem] md:gap-24">
                    {/*Image*/}
                    <div className="invisible md:visible aspect-square bg-gray-300 rounded-2xl">

                    </div>
                    <div className="mt-auto flex flex-col gap-12">
                        <p className="font-outfit font-bold tracking-wide text-[3.2rem]/12">
                            Tether turns silent theft into a
                            <span className="text-[#3D4EE8]"> visible moment </span>
                            you can react to
                        </p>
                        <p className="font-inter text-[1.3rem]">
                            Tether monitors the safety of your belongings and notifies you on the central device
                            immediately when something happens. <br />
                            <br />
                            Whether you choose to contact the police or intervene, you can act right away
                            when theft occurs, giving you a higher chance of recovering your items.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
