import deviceImg1 from '../../assets/home-page/first_section/1.png'
import deviceImg2 from '../../assets/home-page/first_section/2.png'
import deviceImg3 from '../../assets/home-page/first_section/3.png'
import deviceImg4 from '../../assets/home-page/first_section/4.png'

const firstSectionImgArray = [deviceImg1, deviceImg2, deviceImg3, deviceImg4];
export default function(){
    return (
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
                <h1 className="text-white md:text-[6.2rem]/20 sm:text-[5.4rem]/18 text-[4.4rem]/15 text-center font-outfit font-bold tracking-wider visible">
                    Theft <br /> Protection <br /> Stickers
                </h1>
                <p className="m-auto text-white font-[Nico_Moji] text-[2.8rem] text-center visible">
                    Tether
                </p>
            </div>
        </div>
    )
}