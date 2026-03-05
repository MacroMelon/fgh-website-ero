import { createFileRoute } from '@tanstack/react-router'

import stepData from "@/assets/getting-started/step-data/stepData.ts";

export const Route = createFileRoute('/getting-started')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            {stepData.map((section, sectionIndex) => {
                return (
                    <div key={sectionIndex}>
                        <div>
                            {section.sectionTitle}
                        </div>
                        <div>
                            {section.steps.map((step, stepIndex) => {
                                return (
                                    <div key={stepIndex}>
                                        <img
                                            src = {step.image}
                                            alt = {step.imgAlt}
                                        />
                                        <p>
                                            {step.text}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
