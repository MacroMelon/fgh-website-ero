import imgText1 from '@/assets/home-page/image_text_section/1.svg'
import imgText2 from '@/assets/home-page/image_text_section/2.svg'
import imgText3 from '@/assets/home-page/image_text_section/3.svg'
import imgText4 from '@/assets/home-page/image_text_section/4.svg'

const imgTextSectionArray = [
    {
        image: imgText1,
        imAlttext: "",
        text: "Protect your belongings in crowded spaces."
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
        text: "Even when they are left in public"
    },
]

export default function (){
    return(
        <div className="max-w-140 lg:max-w-180 xl:max-w-full xl:mx-18 mx-auto">
            <h2 className="font-outfit text-big mx-10 xl:mx-0 xl:max-w-240">
                Tether protects your belongings in any situations
            </h2>
            <div className="mt-32 flex flex-col xl:grid xl:grid-cols-2 gap-24 xl:gap-2 mx-18 xl:mx-0">
                {imgTextSectionArray.map((element, index) => {
                    const isEvenRow = !((index + 1) % 4) || !((index + 2) % 4);
                    return (
                        <div
                            className="flex flex-col text-center xl:even:flex-row xl:odd:flex-row-reverse xl:odd:mr-12 xl:even:ml-12 gap-6 xl:gap-0 xl:max-h-90 xl:min-h-30"
                            key={index}
                        >
                            <img
                                className="flex-3"
                                src={element.image}
                                alt={element.imAlttext}
                            />
                            <div className={"hidden xl:block flex-2 min-w-30 border-[#3D4EE8] w-full " + (isEvenRow ? " border-b-2 mb-4" : " border-t-2 mt-4")}/>
                            <div className={"mx-auto xl:mx-0 text-[1.8rem]/8 xl:text-[2.1rem]/10 max-w-85 font-light font-outfit" + (isEvenRow ? " xl:mt-auto" : " xl:mb-auto") + (index % 2 ? " xl:text-right" : " xl:text-left")}>
                                {element.text}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}