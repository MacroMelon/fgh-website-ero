import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <div className="bg-[url(/contact/banner.png)] bg-cover aspect-4311/759">
                Contact Us
            </div>
            <form>
                <div className="flex">
                    <label className="w-1/3">
                        <div>First Name</div>
                        <input/>
                    </label>
                    <label className="w-1/3">
                        <div>Family Name</div>
                        <input/>
                    </label>
                    <label className="w-1/3">
                        <div>First Name</div>
                        <input/>
                    </label>
                </div>
                <div className="flex">
                    <label className="w-2/3">
                        <div>Email</div>
                        <input/>
                    </label>
                    <label className="w-1/3">
                        <div>Family Name</div>
                        <input/>
                    </label>
                </div>
                <div>
                    <label>
                        <div>Message</div>
                        <input/>
                    </label>
                </div>
                <button
                    className=""
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
