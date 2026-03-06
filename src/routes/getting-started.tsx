import { createFileRoute } from '@tanstack/react-router'

import stepData from "@/assets/getting-started/step-data/stepData.ts";
import {ReactElement} from "react";

export const Route = createFileRoute('/getting-started')({
    component: RouteComponent,
})

const drawStepsInColumns = (steps : Array<{title: string, image: string, imgAlt: string, text: string, large: boolean}>) : Array<ReactElement> => {

    const drawSingleStep = (step: {title: string, image: string, imgAlt: string, text: string, large: boolean}, stepNum: number) : ReactElement => {
        console.log(step);
        return (
            <div className="lg:flex lg:flex-col lg:w-1/2 lg:mx-8 lg:my-0">
                <img
                    className="flex my-auto lg:h-3/4"
                    src = {step.image}
                    alt = {step.imgAlt}
                />
                <div className="flex mx-14 lg:h-1/4 lg:mx-auto lg:max-w-120 mt-6 lg:mt-5 lg mb-12 font-outfit text-small lg:text-center">
                    <p className="mr-2">
                        {stepNum}.
                    </p>
                    <p>
                        {step.text}
                    </p>
                </div>
            </div>
        )
    }

    const drawDoubleStep = (step: {title: string, image: string, imgAlt: string, text: string, large: boolean}, stepNum: number) : ReactElement => {
        return (
            <div className="lg:flex lg:flex-col lg:mx-8">
                <img
                    className="flex"
                    src = {step.image}
                    alt = {step.imgAlt}
                />
                <div className="flex mx-14 lg:mx-auto lg:max-w-216 mt-8 mb-8 font-outfit text-small lg:text-center">
                    <p className="mr-2">
                        {stepNum}.
                    </p>
                    <p>
                        {step.text}
                    </p>
                </div>
            </div>
        )
    }

    let i = 0;
    let output: Array<ReactElement> = [];
    while (i < steps.length) {
        if (!steps[i].large) {
            output.push(
                <div className="lg:flex"
                    key={i}
                >
                    {drawSingleStep(steps[i], i + 1)}
                    {drawSingleStep(steps[i + 1], i + 2)}
                </div>
            )
            i = i + 2;
        }
        else {
            output.push(
                <>
                    {drawDoubleStep(steps[i], i + 1)}
                </>
            )
            i++;
        }
    }
    return output;
}

function RouteComponent() {
    return (
        <div className="flex flex-row max-w-140 lg:max-w-full mx-auto pt-12">
            <div className="hidden lg:block mb-10 border border-[#D9D9D9] shadow-md shadow-gray-500 ml-6 w-lg">
                {stepData.map((section, sectionIndex) => {
                    return (
                        <div className="mx-6 mt-14"
                            key={sectionIndex}
                        >
                           <div className="flex gap-2 font-outfit font-bold tracking-wide text-[#3D4EE8] text-[1.6rem]/8">
                               <div>
                                   {'>'}
                               </div>
                               <div>
                                   {section.sectionTitle}
                               </div>
                           </div>
                            <ul className="flex flex-col list-disc ml-14 mt-8 gap-2">
                                {section.steps.map((step, stepIndex) => {
                                    return (
                                        <li className="font-outfit tracking-wide text-[1.3rem]/6 text-[#6B6B6B]"
                                            key={stepIndex}
                                        >
                                            {step.title}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className="pb-20 w-full">
                {stepData.map((section, sectionIndex) => {
                    return (
                        <div className="my-6"
                             key={sectionIndex}>
                            <h2 className="flex mx-14 font-outfit text-[#3D4EE8] font-bold tracking-wide text-big lg:pb-4 lg:border-b-2 lg:border-[#555FD0]">
                                {section.sectionTitle}
                            </h2>
                            <div className="mt-14 mx-10">
                                {drawStepsInColumns(section.steps).map((element) => element)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
