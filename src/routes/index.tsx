import { createFileRoute } from '@tanstack/react-router'
import deviceImg1 from '../assets/home-page/first_section/1.png'
import deviceImg2 from '../assets/home-page/first_section/2.png'
import deviceImg3 from '../assets/home-page/first_section/3.png'
import deviceImg4 from '../assets/home-page/first_section/4.png'

import middleImage from '../assets/home-page/middle_image.png'

import imgText1 from '../assets/home-page/image_text_section/1.png'
import imgText2 from '../assets/home-page/image_text_section/2.png'
import imgText3 from '../assets/home-page/image_text_section/3.png'
import imgText4 from '../assets/home-page/image_text_section/4.png'


export const Route = createFileRoute('/')({ component: App })

const firstSectionImgArray = [deviceImg1, deviceImg2, deviceImg3, deviceImg4]

const imgTextSectionArray = [
    {
        image: imgText1,
        imAlttext: "",
        text: "Protect your belongings on busy streets and crowded spaces."
    },
    {
        image: imgText2,
        imAlttext: "",
        text: "Protect your belongings when you step away for a moment."
    },
    {
        image: imgText3,
        imAlttext: "",
        text: "Protection for moments of distraction from your belongings."
    },
    {
        image: imgText4,
        imAlttext: "",
        text: "Protect your bike parking in public."
    },
]

function App() {

    return (
        <div>
            <div className="flex flex-row relative justify-center">
                <div className="md:flex md:flex-row grid grid-cols-2 grid-rows-2">
                    {firstSectionImgArray.map((image)=> {
                        return (
                            <div className="overflow-hidden">
                                <div className="relative flex hover:scale-110 h-full transition duration-500 ease-in-out">
                                    <img
                                        src={image}
                                        alt="Tether tag on bank card"
                                    >
                                    </img>
                                    <div className="absolute inset-0 bg-black/64 hover:bg-black/0 transition duration-500 ease-in-out" />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="absolute flex flex-col self-center gap-24 invisible"
                >
                    <div className="text-white md:text-[6.2rem]/20 sm:text-[5.4rem]/18 text-[4.4rem]/15 text-center font-outfit font-bold tracking-wider visible">
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
            <div className="max-w-140 lg:max-w-full mx-auto">
                <div className="flex flex-col lg:flex-row lg:h-120 text-black text-[1.6rem] lg:text-[3rem]/12 font-outfit font-bold lg:font-normal mx-8 lg:mx-14 lg:my-40 my-24">
                    <div className="flex lg:flex-col gap-12">
                        <p>
                            1. <span className="lg:font-bold">Immediate</span> Theft detection
                        </p>
                        <p className="text-right lg:text-left ml-auto lg:mt-auto">
                            2. Automatic <span className="lg:font-bold">Anti-Theft Alarm</span>
                        </p>
                    </div>
                    <img
                        className="my-12 lg:my-0 lg:p-6 lg:pl-24 lg:pr-18"
                        src={middleImage}
                        alt="An image of the tether tag while bent with the the words: Tether tags, A 2mm thick theft protection sticker."
                    />
                    <div className="flex lg:flex-col gap-12">
                        <p className="lg:text-right">
                            3. <span className="lg:font-bold">Strong adhesion</span> to belongings
                        </p>
                        <p className="text-right ml-auto lg:mt-auto">
                            4. <span className="lg:font-bold">Bendable</span> to fit different surfaces
                        </p>
                    </div>
                </div>
                <div className="mx-14 my-12 flex flex-col gap-40 lg:gap-40">
                    <div className="flex lg:gap-24">
                        {/*Image*/}
                        <div className="invisible lg:visible lg:h-120 my-auto aspect-square bg-gray-300 rounded-2xl">

                        </div>
                        <div className="mt-auto flex flex-col gap-12">
                            <p className="font-outfit font-bold tracking-wide text-[3.2rem]/12">
                                Tether turns silent theft into a
                                <span className="text-[#3D4EE8]"> visible moment </span>
                                you can react to
                            </p>
                            <p className="font-inter text-[1.3rem]">
                                Tether monitors the safety of your belongings and notifies you on the central device
                                immediately when something happens.<br />
                                <br />
                                Whether you choose to contact the police or intervene, you can act right away
                                when theft occurs, giving you a higher chance of recovering your items.
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:h-120 lg:gap-24">
                        <div className="mt-auto flex flex-col gap-12">
                            <p className="font-outfit font-bold tracking-wide text-[3.2rem]/12">
                                A loud deterrent alarm to make thieves
                                <span className="text-[#3D4EE8]"> abandon your belongings </span>
                            </p>
                            <p className="font-inter text-[1.3rem]">
                                The alarm makes theft too risky to continue, forcing thieves to abandon the item.
                            </p>
                        </div>
                        {/*Image*/}
                        <div className="invisible lg:visible h-full aspect-square bg-gray-300 rounded-2xl">

                        </div>
                    </div>
                    <div className="flex lg:h-120 lg:gap-24">
                        {/*Image*/}
                        <div className="invisible lg:visible h-full aspect-square bg-gray-300 rounded-2xl">

                        </div>
                        <div className="mt-auto flex flex-col gap-12">
                            <p className="font-outfit font-bold tracking-wide text-[3.2rem]/12">
                                Find your belongings back
                            </p>
                            <p className="font-inter text-[1.3rem]">
                                The Tether app tracks and shows the locations of all your belongings with Tether tags.<br />
                                <br />
                                Follow the map to find them easily if they are abandoned by a thief or if you simply forget where they are.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-40">
                    <div className="font-outfit font-bold text-[3.7rem]/15 tracking-wide mx-10">
                        Tether protects your belongings in any situations
                    </div>
                    <div className="mt-18 flex flex-col lg:grid lg:grid-cols-2 gap-24 lg:gap-2 mx-18 lg:mx-12">
                        {imgTextSectionArray.map((element, index) => {
                            const isEvenRow = !((index + 1) % 4) || !((index + 2) % 4);
                            return (
                                <div className="flex flex-col text-center lg:even:flex-row lg:odd:flex-row-reverse gap-6 lg:gap-0 lg:odd:text-left lg:even:text-right lg:h-52">
                                    <img
                                        className="h-full"
                                        src={element.image}
                                        alt={element.imAlttext}
                                    />
                                    <div className={"text-[1.8rem]/8 lg:text-[1.2rem]/5 w-full font-light font-outfit " + (isEvenRow ? "lg:mt-auto" : "lg:mb-auto")}>
                                        {element.text}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
