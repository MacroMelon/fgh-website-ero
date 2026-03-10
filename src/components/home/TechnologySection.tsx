import img1 from "@/assets/home-page/technology_section/1.png"
import img2 from "@/assets/home-page/technology_section/2.png"
import img3 from "@/assets/home-page/technology_section/3.png"
import img4 from "@/assets/home-page/technology_section/4.png"

const featureData = [
    {
        title: "Industrial-grade adhesive",
        description: <>Tether uses strong adhesive tape to ensure that no one can remove it by hand,
            and it <b>doesn’t harm your belongings</b>. You can remove it using the alcohol wipes included in the
            Tether package.</>,
        image: img1,
        imgAlt: ""
    },
    {
        title: "Cut-proof",
        description: <>Tether uses cut-resistant Kevlar as the case material to ensure it cannot be easily broken.</>,
        image: img2,
        imgAlt: ""
    },
    {
        title: "Long live the battery",
        description: <>er battery lasts 1–2 years and can be replaced when your phone alerts you.</>,
        image: img3,
        imgAlt: ""
    },
    {
        title: "Almost Invisible",
        description: <>Tether won’t affect the normal use of your device because it is so small—only 2 mm thick and
            smaller than an ID card. </>,
        image: img4,
        imgAlt: ""
    }
]

//bg-[url(/home-page/technology_section/${index+1}.png)]
//${feature.image}

export default function (){
    return(
        <div className="mt-26 px-6 max-w-140 lg:max-w-full mx-auto">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
                {/*featureData.map((feature, index) => {
                    const imName = String(index+1);
                    return (
                        <div
                            key={index}
                            className={"flex flex-col bg-cover px-10 py-10 bg-[url(/home-page/technology_section/" + imName + ".png)] max-w-110 min-h-116 text-white text-center rounded-4xl"}
                        >
                            <h3 className="flex font-outfit min-h-30 items-end self-center font-bold text-[3.2rem]/13">
                                {feature.title}
                            </h3>
                            <p className="my-auto pt-10 font-outfit text-small">
                                {feature.description}
                            </p>
                        </div>
                    )
                })*/}
                <div
                    className="flex flex-col bg-cover px-10 py-10 bg-[url(/home-page/technology_section/1.png)] max-w-110 min-h-116 text-white text-center rounded-4xl"
                >
                    <h3 className="flex font-outfit min-h-30 items-end self-center font-bold text-[3.2rem]/13">
                        {featureData[0].title}
                    </h3>
                    <p className="my-auto pt-10 font-outfit text-small">
                        {featureData[0].description}
                    </p>
                </div>
                <div
                    className="flex flex-col bg-cover px-10 py-10 bg-[url(/home-page/technology_section/2.png)] max-w-110 min-h-116 text-white text-center rounded-4xl"
                >
                    <h3 className="flex font-outfit min-h-30 items-end self-center font-bold text-[3.2rem]/13">
                        {featureData[1].title}
                    </h3>
                    <p className="my-auto pt-10 font-outfit text-small">
                        {featureData[1].description}
                    </p>
                </div>
                <div
                    className="flex flex-col bg-cover px-10 py-10 bg-[url(/home-page/technology_section/3.png)] max-w-110 min-h-116 text-white text-center rounded-4xl"
                >
                    <h3 className="flex font-outfit min-h-30 items-end self-center font-bold text-[3.2rem]/13">
                        {featureData[2].title}
                    </h3>
                    <p className="my-auto pt-10 font-outfit text-small">
                        {featureData[2].description}
                    </p>
                </div>
                <div
                    className="flex flex-col bg-cover px-10 py-10 bg-[url(/home-page/technology_section/4.png)] max-w-110 min-h-116 text-white text-center rounded-4xl"
                >
                    <h3 className="flex font-outfit min-h-30 items-end self-center font-bold text-[3.2rem]/13">
                        {featureData[3].title}
                    </h3>
                    <p className="my-auto pt-10 font-outfit text-small">
                        {featureData[3].description}
                    </p>
                </div>
            </div>
        </div>
    )
}