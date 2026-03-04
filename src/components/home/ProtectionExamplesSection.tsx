import imgText1 from '../../assets/home-page/image_text_section/1.png'
import imgText2 from '../../assets/home-page/image_text_section/2.png'
import imgText3 from '../../assets/home-page/image_text_section/3.png'
import imgText4 from '../../assets/home-page/image_text_section/4.png'

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

export default function (){
    return(
        <div className="max-w-140 lg:max-w-full mx-auto">
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
    )
}