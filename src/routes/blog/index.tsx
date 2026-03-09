import { createFileRoute } from '@tanstack/react-router'
import BlogPageCard from "@/components/blog/blogPageCard.tsx";
import blogData from "@/assets/blog/blogData.ts";

export const Route = createFileRoute('/blog/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <div className="bg-linear-[180deg,#D8DBFF_0%,#F9EDFF_27%,#FFFFFF_65%] px-20 py-32">
                <h1 className="font-outfit text-[#4353E9] text-big">
                    Blog
                </h1>
                <p className="mt-6 max-w-400 font-outfit text-[2.5rem]/12 md:text-[2.8rem]/14 text-[#4353E9]">
                    The Tether Team is hard at work providing you with the most up-to-date information on theft and pickpocketing.
                </p>
            </div>
            <div className="mx-22">
                <div className="mt-12 flex flex-wrap justify-center gap-24">
                    {blogData.map((blogPage, index) => (
                        <div key={index}>
                            <BlogPageCard blogPageDetails={blogPage} />
                        </div>
                    ))}
                </div>
                <div className="mt-10 mb-20 flex justify-center font-inter text-[2.8rem] text-[#2E39AD]">
                    <div>
                        {'<'}
                    </div>
                    <div className="flex">
                        <a>
                            1
                        </a>
                    </div>
                    <div>
                        {'>'}
                    </div>
                </div>
            </div>
        </div>
    )
}
