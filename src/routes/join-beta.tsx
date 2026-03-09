import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/join-beta')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <div className="bg-[url(/join-beta/banner_bg.png)] h-screen md:bg-size-[auto_1000px] md:bg-position-[right_top_-1rem]">

            </div>
        </div>
    )
}
