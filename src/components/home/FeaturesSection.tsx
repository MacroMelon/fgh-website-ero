import middleImage from '@/assets/home-page/middle_image.png'

export default function(){
    return (
        <div className="max-w-140 2xl:max-w-full mx-auto">
            <div className="flex flex-col 2xl:flex-row 2xl:h-165 text-black text-[1.6rem] 2xl:text-[3.8rem]/15 font-outfit font-bold 2xl:font-normal mx-8 2xl:mx-36">
                <div className="flex 2xl:flex-col gap-12 ">
                    <p>
                        1. <span className="font-bold text-[#3D4EE8]">Immediate</span> Theft detection
                    </p>
                    <p className="text-right 2xl:text-left ml-auto 2xl:mt-auto">
                        3. <span className="font-bold text-[#3D4EE8]">Strong adhesion</span> to belongings
                    </p>
                </div>
                <img
                    className="flex my-12 2xl:my-auto 2xl:p-6 h-full"
                    src={middleImage}
                    alt="An image of the tether tag while bent with the the words: Tether tags, A 2mm thick theft protection sticker."
                />
                <div className="flex 2xl:flex-col gap-12">
                    <p className="2xl:text-right">
                        2. Automatic <span className="font-bold text-[#3D4EE8]">Anti-Theft Alarm</span>
                    </p>
                    <p className="text-right ml-auto 2xl:mt-auto">
                        4. <span className="font-bold text-[#3D4EE8]">Bendable</span> to fit different surfaces
                    </p>
                </div>
            </div>
        </div>
    )
}