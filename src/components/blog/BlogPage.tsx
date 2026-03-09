import type {ReactNode} from "react";
import BlogPageCard from "@/components/blog/blogPageCard.tsx";
import GetYourTether from "@/components/GetYourTether.tsx";

export default function({ title, introduction, recomendedReading, children } : {title: string, introduction: string, recomendedReading: Array<{title: string, image: string, imgAlt: string, description: string, url: string }>, children: ReactNode}){
    return (
        <div className="flex flex-col mb-20">
            <div className="bg-linear-[180deg,#D8DBFF_0%,#F9EDFF_27%,#FFFFFF_65%] h-84" />
            <h1 className="mx-auto px-15 md:px-22 font-koulen text-center text-[6rem]/22">
                {title}
            </h1>
            <p className="mx-auto mt-8 px-15 md:px-22 font-outfit text-center text-small">
                {introduction}
            </p>
            <div>
                {children}
            </div>
            <div className="mt-32 flex flex-col">
                <h2 className="px-15 md:px-22 font-outfit text-big text-black/80">
                    Be a part of the change
                </h2>
                <p className="px-15 md:px-22 mt-14 text-[#3B3B3B] font-outfit text-small max-w-440">
                    If you are worried about your phone or other belongings being stolen, consider getting a
                    Tether Sticker to secure them. It’s an all in one solution with a <b>powerful automatic
                    anti-theft alarm</b> integrated with <b>Bluetooth tracking</b>.
                </p>
                <GetYourTether />
            </div>
            <div className="mt-32 mx-4 border-t-3 border-[#3D4EE8]">
                <h2 className="mx-6 md:mx-20 mt-12 font-outfit font-medium text-[#4353E9] text-big-mobile md:text-big">
                    Recommended Reading
                </h2>
                <div className="mt-12 flex flex-wrap justify-center gap-24">
                    {recomendedReading.map((blogCard, index) => (
                        <div key={index}>
                            <BlogPageCard
                                blogPageDetails={blogCard}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}