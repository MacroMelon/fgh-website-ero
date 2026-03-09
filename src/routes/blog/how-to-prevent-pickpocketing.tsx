import { createFileRoute } from '@tanstack/react-router'
import BlogPage from "@/components/blog/BlogPage.tsx";
import blogData from "@/assets/blog/blogData.ts";

import optionsGraphImg from "@/assets/blog/how-to-prevent-pickpocketing/options_graph.png"
import tetherImg from "@/assets/blog/how-to-prevent-pickpocketing/tether.png"

export const Route = createFileRoute('/blog/how-to-prevent-pickpocketing')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <BlogPage
            title={"How to prevent pickpocketing "}
            introduction={"If you are worried about pickpocketing, here are your options. We walk through what is available and what will best suit your needs."}
            recomendedReading={[blogData[2], blogData[4]]}
        >
            <div className="flex flex-col my-12">
                <div className="my-36 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        What are your options?
                    </h2>
                    <p className="mt-18 font-outfit text-small">
                        The government isn’t going to get your phone back. Protecting your belongings has
                        become a matter of personal responsibility.
                    </p>
                    <img
                        className="mt-18 mx-auto px-3 lg:mx-24"
                        src={optionsGraphImg}
                    />
                </div>
                <div className="my-12 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Phone Straps
                    </h2>
                    <div className="flex flex-col-reverse md:flex-row mt-18 gap-12 md:gap-24">
                        <p className="mt-18 font-outfit text-small">
                            <b>Phone straps</b> are often what people gravitate to in the first place and it seems
                            to be a safe and secure choice to protect phones from being stolen.<br/>
                            <br/>
                            However, among the people we interviewed who reported that they had previously
                            used a phone strap, <b>64%</b> stated that they had since stopped using it. Many participants
                            explained that wearing a phone strap around their wrist felt <b>bulky</b> and <b>uncomfortable</b>
                            during daily activities. In addition, which <b>severely interfered with normal phone use</b>.
                        </p>
                        <div className="flex flex-col">
                            <div className="flex flex-col aspect-square mx-auto px-8 bg-[#97D1F5] font-archivo font-black text-[7rem] rounded-[5rem] text-center justify-center">
                                64%
                            </div>
                            <p className="flex mx-auto mt-12 text-center font-raleway text-small italic font-light break-all">
                                7/11 street interviews
                            </p>
                        </div>
                    </div>
                </div>

                <div className="my-12 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Tracker Tags and FindMy
                    </h2>
                    <p className="mt-18 font-outfit text-small">
                        Many people mistakenly place their trust in features such as Apple’s Find My or
                        tracker tags, believing these tools can prevent their phones from being stolen.<br/>
                        <br/>
                        In reality, their effectiveness in protecting devices is extremely limited.
                        By the time users attempt to locate their phone using these features, the device
                        has <b>often already been taken away</b>. Experienced thieves frequently switch the phone
                        off or remove tracker tags to <b>prevent the device from being located</b>. Even if the
                        phone continues to transmit its location, it is unlikely that the police will
                        actively assist victims in recovering the device.
                    </p>
                </div>

                <div className="my-12 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Phone Straps
                    </h2>
                    <div className="flex flex-col-reverse md:flex-row mt-18 gap-12 md:gap-24">
                        <p className="mt-18 font-outfit text-small">
                            <b>Phone straps</b> are often what people gravitate to in the first place and it seems
                            to be a safe and secure choice to protect phones from being stolen.<br/>
                            <br/>
                            However, among the people we interviewed who reported that they had previously
                            used a phone strap, <b>64%</b> stated that they had since stopped using it. Many participants
                            explained that wearing a phone strap around their wrist felt <b>bulky</b> and <b>uncomfortable</b>
                            during daily activities. In addition, which <b>severely interfered with normal phone use</b>.
                        </p>
                        <div className="flex flex-col">
                            <div className="flex flex-col aspect-square mx-auto px-8 bg-[#DBD2FF] font-archivo font-black text-[7rem] rounded-[5rem] text-center justify-center">
                                82%
                            </div>
                            <p className="flex mx-auto mt-12 text-center font-raleway text-small italic font-light break-all">
                                14/17 street interviews
                            </p>
                        </div>
                    </div>
                </div>

                <div className="my-12 px-12 md:px-26 flex flex-col">
                    <div className="flex mr-auto text-black sm:text-transparent font-outfit text-big sm:bg-linear-[90deg,#000000_0%,#969696_70%] sm:bg-clip-text">
                        Comparing to Other Options,<br/>
                        Tether Sticker is....
                    </div>
                    <div className="mt-18 flex flex-col xl:flex-row">
                        <img
                            className="max-h-150 mx-auto xl:mb-0 mb-10"
                            src={tetherImg}
                        />
                        <div className="flex flex-col gap-24 lg:gap-12">
                            <div>
                                <h3 className="font-outfit text-[#525252] text-big">
                                    Safer
                                </h3>
                                <p className="mt-8 xl:mt-4 xl:ml-12 font-outfit text-small">
                                    Automatically detect suspicious move and triggers a loud alarm when the
                                    phone is forcefully separated from the user, immediately drawing attention
                                    and deterring theft.
                                </p>
                            </div>
                            <div className="xl:ml-18">
                                <h3 className="font-outfit text-[#525252] text-big">
                                    Lighter
                                </h3>
                                <p className="mt-8 xl:mt-4 xl:ml-12 font-outfit text-small">
                                    2 mm thin profile, lightweight design, and directly attachable to the
                                    surface of devices for convenient everyday carrying.
                                </p>
                            </div>
                            <div className="xl:ml-36">
                                <h3 className="font-outfit text-[#525252] text-big">
                                    Smarter
                                </h3>
                                <p className="mt-8 xl:mt-4 xl:ml-12 font-outfit text-small">
                                    The companion app displays the device’s real-time distance and direction,
                                    helping users quickly locate their belongings and deter theft.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </BlogPage>
    )
}
