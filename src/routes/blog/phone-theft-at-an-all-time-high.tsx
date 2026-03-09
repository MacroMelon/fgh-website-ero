import { createFileRoute } from '@tanstack/react-router'
import BlogPage from "@/components/blog/BlogPage.tsx";
import blogData from "@/assets/blog/blogData.ts";

import googleStatsImg from "@/assets/blog/phone-theft-at-an-all-time-high/google_stats.png"
import mindGrabImg from "@/assets/blog/phone-theft-at-an-all-time-high/mind_the_grab.png"
import stolenPhonePricesImg from "@/assets/blog/phone-theft-at-an-all-time-high/stolen_phone_prices.png"
import theftDataImg from "@/assets/blog/phone-theft-at-an-all-time-high/theft_data.png"

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
            <div className="my-12">
                <div className="flex flex-col mt-12 mx-0 md:mx-36">
                    <img
                        src={googleStatsImg}
                        alt="A graph of the google search trend for the words 'Phone stolen' and 'Phone theft' (trending up)"
                    />
                    <p className="mx-auto mt-3 px-5 text-center font-raleway text-small italic font-light">
                        Phone stolen and Phone theft (Google Trends UK, 2026)
                    </p>
                </div>

                <div className="my-36 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Phone theft on the rise
                    </h2>
                    <div className="flex flex-col lg:flex-row mt-18 md:mt-28 gap-12 lg:gap-24">
                        <div className="flex flex-col">
                            <img
                                src={theftDataImg}
                            />
                            <p className="mx-auto mt-12 text-center font-raleway text-small italic font-light">
                                (Met Police blitz to fight phone-snatching 'scourge', bbc, 2025)
                            </p>
                        </div>
                        <div className="self-center">
                            <p className="font-outfit text-small">
                                The number of stolen phones has <b>almost tripled in the last four years,</b>
                                from 28,609 in 2020, to 80,588 in 2024. Three-quarters of all the phones stolen
                                in the UK are were taken in London.
                            </p>
                            <p className="font-raleway text-small italic font-light">
                                (Met Police blitz to fight phone-snatching 'scourge', bbc, 2025)
                            </p>
                            <p className="mt-12 font-outfit text-small">
                                Thanks to a 2026 FOI request to the Metropolitan polices we know
                                that <b>every 5 minutes</b> a phone is stolen in London .
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        The police is overwhelmed
                    </h2>
                    <div className="flex flex-col lg:flex-row mt-18 md:mt-0 gap-12 lg:gap-24">
                        <div className="self-center lg:pb-48">
                            <p className="font-outfit text-small">
                                Out of those phones only 0.0008% of them are ever returned to their
                                rightful owner. There is essentially little to <b>no chance of you ever recovering
                                what you have lost.</b><br />
                                <br />
                                In recent years, more than half of all reported mobile phone thefts in
                                London weren’t investigated at all by the Metropolitan Police
                            </p>
                            <p className="font-raleway text-small italic font-light">
                                (Mobile phone thefts, commonslibrary.parliament, 2026).
                            </p>
                            <p className="mt-12 font-outfit text-small">
                                More and more signs are popping up all across London warning people about
                                the threat. <b>The police can’t keep up</b> with the growing number of cases. They ask
                                that we <b>defend ourselves</b>, keep an eye out, and hold on tight.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <img
                                src={mindGrabImg}
                            />
                            <p className="mx-auto mt-12 text-center font-raleway text-small italic font-light">
                                (Tourist hot spot blasted for ‘normalizing theft’ with phone-snatching awareness campaign, foxnews, 2025)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 md:mt-0 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Getting away with it
                    </h2>
                    <div className="flex flex-col lg:flex-row mt-18 md:mt-28 gap-12 lg:gap-24">
                        <div className="flex flex-col">
                            <img
                                src={stolenPhonePricesImg}
                            />
                            <p className="mx-auto mt-12 text-center font-raleway text-small italic font-light">
                                (Met Police blitz to fight phone-snatching 'scourge', bbc, 2025)
                            </p>
                        </div>
                        <div className="self-center">
                            <p className="font-outfit text-small">
                                Phones are becoming more and more expensive with <b>4 digit prices</b> often being
                                reached in flagship models. The France journal confirmed that this represents
                                more than a <b>50 millions</b> pound black market industry in London alone. The thieves
                                are stealing and having success doing so.<br />
                                <br />
                                <b>78% of stolen phones were reconnected to foreign networks</b>, which means that the
                                thieves don’t even need to strip the phones for parts, and instead just resell
                                the phones to other buyers in other countries
                            </p>
                            <p className="font-raleway text-small italic font-light">
                                (Phone giants under pressure to 'design out' thefts, thenationalnews, 2025).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </BlogPage>
    )
}
