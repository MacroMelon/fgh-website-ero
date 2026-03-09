import type {ReactNode} from "react";
import BlogPageCard from "@/components/blog/blogPageCard.tsx";

export default function({ title, introduction, recomendedReading, children } : {title: string, introduction: string, recomendedReading: Array<{title: string, image: string, imgAlt: string, description: string, url: string }>, children: ReactNode}){
    return (
        <div>
            <div />
            <h1>
                {title}
            </h1>
            <p>
                {introduction}
            </p>
            <div>
                {children}
            </div>
            <div>

            </div>
            <div>
                <h2>
                    Recommended Reading
                </h2>
                <div>
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