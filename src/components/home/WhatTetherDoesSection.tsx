import bikeImg from "@/assets/home-page/what_does_section/bike.png"
import watchImg from "@/assets/home-page/what_does_section/watch.png"
import watch2Img from "@/assets/home-page/what_does_section/watch2.png"
import exViewImg from "@/assets/home-page/what_does_section/ex_view.png"

export default function(){
    return (
        <div className="max-w-140 lg:max-w-full mx-auto">
            <div className="mx-14 lg:mx-28 flex flex-col gap-40 lg:gap-40">

                <div className="flex">
                    <div className="my-auto flex flex-col lg:w-1/2 gap-12">
                        <h3 className="font-outfit text-big">
                            A
                            <span className="text-[#3D4EE8]"> loud alarm </span>
                            that scares away the thieves
                        </h3>
                        <p className="font-inter text-[1.6rem]">
                            When a theft is detected, the alarm will be automatically triggered and can only
                            be turned off by the user on the Anchor devices. The alarm makes theft too
                            risky to continue, forcing thieves to abandon the item.
                        </p>
                    </div>
                    <img
                        className="hidden lg:flex my-auto w-1/2"
                        src={bikeImg}
                    />
                </div>

                <div className="flex">
                    <img
                        className="hidden lg:flex my-auto w-1/2 px-24"
                        src={watchImg}
                    />
                    <div className="my-auto flex flex-col lg:w-1/2 gap-12">
                        <h3 className="font-outfit text-big">
                            Get notified when Tether detects
                            <span className="text-[#3D4EE8]"> suspicious activity </span>
                        </h3>
                        <p className="font-inter text-[1.6rem]">
                            Tether monitors the safety of your belongings and notifies you on the Anchor device
                            immediately when something happens.<br/>
                            <br/>
                            Whether you choose to contact the police or intervene, you can act right
                            away when theft occurs, giving you a higher chance of recovering your items.
                        </p>
                    </div>
                </div>

                <div className="flex">
                    <div className="my-auto flex flex-col lg:w-1/2 gap-12">
                        <h3 className="font-outfit text-big">
                            Using
                            <span className="text-[#3D4EE8]"> Bluetooth </span>
                            to help find your belongings
                        </h3>
                        <p className="font-inter text-[1.6rem]">
                            The Tether app tracks and shows the locations of all your belongings
                            with Tether Stickers.<br />
                            <br />
                            Follow the map to find them easily if they are abandoned by a thief or if you simply
                            forget where they are.
                        </p>
                    </div>
                    <img
                        className="hidden lg:flex my-auto w-1/2 px-18"
                        src={watch2Img}
                    />
                </div>

                <div className="flex">
                    <img
                        className="hidden lg:flex my-auto w-1/2 px-24"
                        src={exViewImg}
                    />
                    <div className="my-auto flex flex-col lg:w-1/2 gap-12">
                        <h3 className="font-outfit text-big">
                            Automatic
                            <span className="text-[#3D4EE8]"> theft detection </span>
                        </h3>
                        <p className="font-inter text-[1.6rem]">
                            <span className="text-[#3D4EE8]">Motion sensors </span>
                            classify how the item moves and combines this data with simple
                            <span className="text-[#3D4EE8]"> distance tracking </span>
                            between you and your belongings to detect theft.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}