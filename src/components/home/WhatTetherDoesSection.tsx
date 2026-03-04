export default function(){
    return (
        <div className="max-w-140 lg:max-w-full mx-auto">
            <div className="mx-14 flex flex-col gap-40 lg:gap-40">
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
        </div>
    )
}