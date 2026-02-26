import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {

    return (
        <div>
            <div className="font-[Nico_Moji] text-3xl">
                Tether
            </div>
        </div>
    )
}
