import { createFileRoute } from '@tanstack/react-router'
import BlogPageCard from "@/components/blog/blogPageCard.tsx";
import blogData from "@/assets/blog/blogData.ts";

export const Route = createFileRoute('/blog/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <div>
                <h1>
                    Blog
                </h1>
                <p>
                    The Tether Team is Hard at work
                </p>
            </div>
            <div>
                <div>
                    {blogData.map((blogPage, index) => (
                        <div key={index}>
                            <BlogPageCard blogPageDetails={blogPage} />
                        </div>
                    ))}
                </div>
                <div className="flex">
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
