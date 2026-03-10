import { createFileRoute } from '@tanstack/react-router'
import BlogPage from "@/components/blog/BlogPage.tsx";
import blogData from "@/assets/blog/blogData.ts";

import annikaImg from "@/assets/blog/is-your-data-thief-proof/experts/annika.png";
import eamonnImg from "@/assets/blog/is-your-data-thief-proof/experts/eamonn.png";
import jamesImg from "@/assets/blog/is-your-data-thief-proof/experts/james.png";
import jasonImg from "@/assets/blog/is-your-data-thief-proof/experts/jason.png";

import devsecImg from "@/assets/blog/is-your-data-thief-proof/device_settings.png"


export const Route = createFileRoute('/blog/is-your-data-thief-proof')({
    component: RouteComponent,
    head: () => ({
        meta: [
            {
                title: "Is your data thief proof?"
            },
            {
                name: 'description',
                content: "Getting your device stolen is stressful, especially considering the sensitive data that it might contain. Here’s all you need to know about how safe your data is, and what you can do about it."
            },
            {
                property: 'og:title',
                content: "Is your data thief proof?"
            },
            {
                property: 'og:description',
                content: "Getting your device stolen is stressful, especially considering the sensitive data that it might contain. Here’s all you need to know about how safe your data is, and what you can do about it."
            },
            {
                property: 'og:image',
                content: "https://tether.donutsloth.net/blog/is-your-data-thief-proof/thumbnail.png"
            },
            {
                property: 'og:image:type',
                content: 'image/png'
            }
        ]
    })
})

const expertData = [
    {
        name: "Annika Harper",
        role: "MaaS360 Technical Specialist",
        picture: annikaImg
    },
    {
        name: "Eamonn McEvoy",
        role: "Maas360 Technical Support",
        picture: eamonnImg
    },
    {
        name: "Jason Benett",
        role: "Lead engineer for Windows managment",
        picture: jasonImg
    },
    {
        name: "James Turner",
        role: "Jamf apple device managment",
        picture: jamesImg
    }
]

function RouteComponent() {
    return (
        <BlogPage
            title={"Is your data thief proof? "}
            introduction={"Getting your device stolen is stressful, especially considering the sensitive data that it might contain. Here’s all you need to know about how safe your data is, and what you can do about it."}
            recomendedReading={[blogData[1], blogData[4]]}
        >
            <div className="flex flex-col my-12">
                <div className="my-36 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        We asked the experts
                    </h2>
                    <p className="mt-18 font-outfit text-small">
                        We asked specialists in device management that work with very sensitive information
                        from hospitals to classified government research. They told all the internal working
                        of setting up devices and ensuring they are secure.
                    </p>
                    <div className="mt-20 flex flex-col xl:grid xl:grid-cols-2 gap-24">
                        {expertData.map((expert, index) => (
                            <div
                                key={index}
                                className="flex rounded-full bg-[#C6CBF9] h-48"
                            >
                                <img
                                    className="m-5"
                                    src={expert.picture}
                                />
                                <div className="my-auto ml-18">
                                    <p className="font-black font-archivo text-[1.6rem]">
                                        {expert.name}
                                    </p>
                                    <p className="mt-2 font-outfit text-small">
                                        {expert.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-36 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        The good news
                    </h2>
                    <p className="mt-18 font-outfit text-small">
                        There is a lot of sensitive information on your devices so it is
                        natural to be worried. The good news is your data is really well
                        encrypted in nearly all modern devices. As long as you don’t suspect
                        they know your passwords, or shoulder surfed, you should be okay. None
                        the less, there has been a few remote cases where devices were used for
                        bank fraud so we would recommend contacting your bank to get your the cards
                        blocked, especially nfc payment
                        (https://www.nationalcrimeagency.gov.uk/threats-2025/nsa-oac-2025#:~:text=Between
                        January and August 2024%2C robbery of mobile,to China%2C Dubai%2C Algeria%2C Morocco%2C
                        Romania%2C and Bulgaria).<br/>
                        <br/>
                        In most cases all the thief wants to do is factory reset the device to resell it
                        in another country, and has no interest in your data. Since some devices have factory
                        reset protection or have Activation Locks you can enable on your “FindMy” apps, they
                        may not be able to do that. In those cases they’ll strip the device for parts and resell
                        those. Either way, your data is probably not their primary goal.<br/>
                        <br/>
                        <b>Just do these few steps</b>:<br/>
                        -Don’t have an easy passcode and a shorter auto-lock times, because if they get in,
                        that is when things get tricky.<br/>
                        -Also turn off message previews, so that thieves won’t see any messages about reset or
                        login codes when your phone is locked.<br/>
                    </p>
                </div>

                <div className="mt-24 md:mt-0 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Lost mode and automatic lock screens
                    </h2>
                    <div className="flex flex-col lg:flex-row mt-18 md:mt-28 gap-12 lg:gap-24">
                        <div className="flex flex-col">
                            <img
                                src={devsecImg}
                            />
                        </div>
                        <div className="self-center">
                            <p className="font-outfit text-small">
                                None the less, you don’t know if they may have somehow managed to open your device, and you should act accordingly. The remote lock and activation lock features block your devices from being opened preventing the thief from attempting to break in.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="my-36 px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        If you are an employee
                    </h2>
                    <p className="mt-18 font-outfit text-small">
                        If this was a company device it is likely that it is being managed by in MDM or DDM, so do notify your IT team so that they can block that device. If you forgot to report it, it is still possible that it will automatically get flagged either based on the location of login, and if the thief’s behaviour matches your typical activity.<br/>
                        If the device isn’t managed, then that can be a serious concern if it was a targeted attack. Based on the contents of the leak your company may even get fined by the ICO. Company devices should be managed and kept up to date with benchmarks (CEIS, MIST, etc). Consider things like enforcing full-disk encryption across all platforms and disabling local backups and offline access for high-risk apps.
                    </p>
                </div>

            </div>
        </BlogPage>
    )
}
