import { createFileRoute } from '@tanstack/react-router'
import BlogPage from "@/components/blog/BlogPage.tsx";
import blogData from "@/assets/blog/blogData.ts";

import comDataImg from "@/assets/blog/are-you-a-pickpocket-target/comData.png"
import strtDataImg from "@/assets/blog/are-you-a-pickpocket-target/strtData.png"
import todTheftImg from "@/assets/blog/are-you-a-pickpocket-target/todTheft.png"
import victGenImg from "@/assets/blog/are-you-a-pickpocket-target/victGen.png"

export const Route = createFileRoute('/blog/are-you-a-pickpocket-target')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <BlogPage
            title={"Are You a Pickpocket Target?"}
            introduction={"Some people have been pickpocketed multiple times, while others have never experienced it. Learn what may make you or your friend their target, and when and where to be careful."}
            recomendedReading={[blogData[1], blogData[4]]}
        >
            <div className="flex flex-col my-12">
                <div className="flex flex-col mt-24 mx-12 md:mx-36">
                    <div className="flex flex-col md:flex-row gap-24">
                        <div>
                            <img
                                src={todTheftImg}
                            />
                            <p className="mx-auto mt-3 px-5 text-center font-raleway text-small italic font-light">
                                (Combined data from met police foi on phone theft, 2024)
                            </p>
                        </div>
                        <div>
                            <img
                                src={comDataImg}
                            />
                            <p className="mx-auto mt-3 px-5 text-center font-raleway text-small italic font-light">
                                (City Streets 2025 Summary Report . (2025). [online] City of London Corporation)
                            </p>
                        </div>
                    </div>
                    <p className="mt-16 font-outfit text-small">
                        We collected data the Met police released on phone theft and we find that most
                        cases happen during afternoon matching with lunch and especially dinner. Even though
                        there are very few people out and about at night, the cases are essentially as
                        high as during the lunch hours. In essence, the commonly held belief that you should
                        be <b>careful at night</b> and that <b>criminals aren’t really morning people</b> is spot on.
                    </p>
                </div>

                <div className="my-36 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        The pickpocketing hotspots
                    </h2>
                    <div className="flex flex-col lg:flex-row mt-18 md:mt-28 gap-12 lg:gap-24">
                        <div className="flex flex-col">
                            <img
                                src={strtDataImg}
                            />
                            <p className="mx-auto mt-12 text-center font-raleway text-small italic font-light break-all">
                                https://www.met.police.uk/foi-ai/metropolitan-police/disclosure-2025/june-2025/mobile-phone-thefts-westminster-2024
                            </p>
                        </div>
                        <div className="self-center pb-0 lg:pb-40">
                            <p className="font-outfit text-small">
                                You may already know that London is the pickpoketting center of the UK, with
                                1/3 of UK incidents happening in the capital. The pickpockets primary work
                                in the busy streets which include Oxford street and Regent street. With half
                                of pickpocketing incidents happening in public spaces, it might be worth asking
                                yourself how often you visit them, and how aware of your surrounding you are
                                when you do.<br/>
                                <br/>
                                What people don't often realise is that the other half of times, pickpocketing
                                happens in restaurants and pubs. Many of the people we interviewed had a thief
                                sneak past them and grab whatever was on or under the table. We hear all too often
                                about the sceptical of snatching when in reality stealth theft accounts for 80% of
                                successful theft from a person are through stealth. Even if they have cameras, you
                                aren’t legally allowed to look at them and police will only have a look if the goods
                                stolen exceed around 1000 pounds.
                            </p>
                            <p className="mt-3 font-raleway text-small italic font-light">
                                (Office Of National Statistics (2017) ‘Overview of robbery and theft from the person’.)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Know who they target
                    </h2>
                    <div className="flex flex-col lg:flex-row mt-18 gap-12 lg:gap-24">
                        <div className="self-center lg:pb-48">
                            <p className="font-outfit text-small">
                                <b>If you are young</b> and constantly going to high traffic areas at night you will
                                naturally be more at risk, and the statistics do show that young people are twice
                                as likely to be victims.<br/>
                                <br/>
                                <b>If you are elderly or have a disability</b> you are 1.6 to 1.8 times more likely to
                                be a victim. Thieves will happily target those they think will put up less of a
                                fight should they fail to be sneaky.<br/>
                                <br/>
                                <b>Mixed ethnicity</b> and especially people with Chinese ethnicity are also more at risk.
                                We aren’t sure of the reason for this. It could be that tourists or those who could
                                be assumed to be are targeted as they are assumed to be less aware of the risks.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <img
                                src={victGenImg}
                            />
                            <p className="mx-auto mt-12 text-center font-raleway text-small italic font-light">
                                (Data from met police foi on phone theft, 2024)
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </BlogPage>
    )
}
