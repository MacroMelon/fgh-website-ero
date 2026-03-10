import { createFileRoute } from '@tanstack/react-router'

import TitleSection from "@/components/home/TitleSection.tsx";
import FeaturesSection from "@/components/home/FeaturesSection.tsx";
import WhatTetherDoesSection from "@/components/home/WhatTetherDoesSection.tsx";
import ProtectionExamplesSection from "@/components/home/ProtectionExamplesSection.tsx";
import TechnologySection from "@/components/home/TechnologySection.tsx";
import JoinUsSection from "@/components/home/JoinUsSection.tsx";

import GetYourTether from "@/components/GetYourTether.tsx";

export const Route = createFileRoute('/')({ component: App })

function App() {
    return (
        <div className="flex flex-col">
            <TitleSection />
            <video className="w-screen" poster="/video_thumbnail.jpg" controls>
                <source src="/Tether.mp4" type="video/mp4"/>
                video
            </video>
            <div className="flex flex-col lg:my-40 my-24 gap-58">
                <FeaturesSection />
                <WhatTetherDoesSection />
                <ProtectionExamplesSection />
                <TechnologySection />
            </div>
            <div className="mt-24 mb-36">
                <GetYourTether />
            </div>
            <JoinUsSection />
        </div>
    )
}
