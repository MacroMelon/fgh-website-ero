import middleImage from '../../assets/home-page/middle_image.png'

export default function(){
    return (
        <div className="max-w-140 lg:max-w-full mx-auto">
            <div className="flex flex-col lg:flex-row lg:h-120 text-black text-[1.6rem] lg:text-[3rem]/12 font-outfit font-bold lg:font-normal mx-8 lg:mx-14">
                <div className="flex lg:flex-col gap-12 ">
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
        </div>
    )
}