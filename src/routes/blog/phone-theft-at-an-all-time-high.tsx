import { createFileRoute } from '@tanstack/react-router'
import BlogPage from "@/components/blog/BlogPage.tsx";
import blogData from "@/assets/blog/blogData.ts";

export const Route = createFileRoute('/blog/phone-theft-at-an-all-time-high')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <BlogPage
            title={"Phone theft at an all time high"}
            introduction={"These past years hundreds of people in the UK flock to the internet for advice about what to do about phone theft. The topic has become a constant sore on people’s minds, and rightly so."}
            recomendedReading={[blogData[1], blogData[2]]}
        >
            <div>

            </div>
        </BlogPage>
    )
}
