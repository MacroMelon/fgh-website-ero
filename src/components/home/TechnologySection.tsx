import explodedViewImage from '../../assets/home-page/exploded_view.png'

export default function (){
    return(
        <div className="max-w-140 lg:max-w-full mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-24 mx-12">
                <img
                    className="mx-6 lg:h-136"
                    src={explodedViewImage}
                    alt='An exploded view of tether tag, which resembles a "sandwich" of 8 layers: The bottom glue layer, a kapton separator, the tpu structural casing lower section, the battery, the electronics, a displacment distributor for teh piezo actuator, the tpu structural casing upper section and a layer of kevlar.'
                />
                <div className="mt-12">
                    <h3 className="font-outfit font-bold text-right text-[3.2rem]/13 tracking-wide">
                        How does Tether detect theft?
                    </h3>
                    <p className="font-inter mt-6 text-[1.8rem]/8.5 lg:text-right lg:text-[1.3rem]/5.5">
                        <span className="text-[#3D4EE8]">Internal sensors </span>
                        monitor how the item moves, combined with
                        <span className="text-[#3D4EE8]"> distance tracking </span>
                        between you and your belongings.
                    </p>
                    <h3 className="font-outfit font-bold text-right text-[3.2rem]/13 tracking-wide mt-32">
                        Why it’s accurate?
                    </h3>
                    <p className="font-inter text-[#FF4B4B] mt-6 text-[1.8rem]/8.5 lg:text-right lg:text-[1.3rem]/5.5">
                        We analyse how different items are stolen and use different algorithms tailored to each type of item.
                    </p>

                </div>
            </div>
        </div>
    )
}