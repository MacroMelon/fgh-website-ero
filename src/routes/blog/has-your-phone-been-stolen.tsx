import BlogPage from "@/components/blog/BlogPage"
import { createFileRoute } from '@tanstack/react-router'
import blogData from "@/assets/blog/blogData.ts";

export const Route = createFileRoute('/blog/has-your-phone-been-stolen')({
    component: RouteComponent,
    head: () => ({
        meta: [
            {
                title: "Has your Device been stolen?"
            },
            {
                name: 'description',
                content: "Here is what you should do when your phone has been stolen."
            },
            {
                property: 'og:title',
                content: "Has your Device been stolen?"
            },
            {
                property: 'og:description',
                content: "Here is what you should do when your phone has been stolen."
            },
            {
                property: 'og:image',
                content: "https://tether.donutsloth.net/blog/has-your-phone-been-stolen/thumbnail.png"
            },
            {
                property: 'og:image:type',
                content: 'image/png'
            }
        ]
    })
})

function RouteComponent() {
    return (
        <BlogPage
            title={"Has your Device been stolen?"}
            introduction={"Here is what you should do when your phone has been stolen."}
            recomendedReading={[blogData[1], blogData[0]]}
        >
            <div className="flex flex-col my-12 gap-14">
                <div className="px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Lock everything you can
                    </h2>
                    <p className="mt-18 font-outfit text-small">
                        If your device has Find My/My Devices or another similar device management platform, you should be able to lock or block your device. If your device has your banking details or nfc payments you should contact your bank to have them blocked.
                    </p>
                </div>

                <div className="px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        IMEI numbers
                    </h2>
                    <p className="mt-18 font-outfit text-small">
                        Having the IMEI number of the device (device number) comes in handy when getting it blocked and reported. You can usually find it in your device manager or by asking your network provider. If you are reading this blog proactively (we are impressed), feel free to go to your device settings and find it in the About Device section or dial #06#. Once you have it, save it somewhere.
                    </p>
                </div>

                <div className="px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Reporting it to the police
                    </h2>
                    <p className="mt-18 font-outfit text-small">
                        First thing you should know, is that they most certainly won’t be getting it back for you. That statistically never happens. It is not uncommon to hear victims say that the police dismissed the case immediately, especially if the device isn’t in the four figures. None the less, reporting it comes in handy for insurance and to get the phones on a deny list.
                    </p>
                </div>

                <div className="px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Deny Listing Phones
                    </h2>
                    <p className="mt-18 font-outfit text-small">
                        The police should send the IMEI numbers to network providers but feel free to do so yourself as well by informing your provider. Though we wouldn’t be too optimistic about your phone not being used even if it is on the deny list as these lists aren’t universal. The Metropolitan estimate around a third of the devices are shipped to Algeria, 20% to mainland China and 7% to Hong Kong, often going back online shortly after.  Around 80% of the stolen devices reported by the Metropolitan police were reconnected using overseas IP addresses with Algeria and China the prime locations identified
                    </p>
                    <p className="mx-auto mt-12 text-center font-raleway text-small italic font-light">
                        ‘What Happens To The Thousands Of Mobile Phones Stolen In The US And Europe? Many Can Be Traced To Just One Building In China, So We Paid Them A Visit Trustonic’ (2025), 1 July. Available at: https://www.trustonic.com/opinion/what-happens-to-the-thousands-of-mobile-phones-stolen-in-the-us-and-europe-many-can-be-traced-to-just-one-building-in-china-so-we-paid-them-a-visit/ (Accessed: 8 March 2026).
                    </p>
                </div>

                <div className="px-12 md:px-26">
                    <h2 className="font-outfit text-big break-all">
                        Insurance
                    </h2>
                    <p className="mt-18 font-outfit text-small">
                        The final step involved is contacting any insurance company you may signed up do. Money Saving Expert recommends you check whether the phone is covered under any home insurance policy. They may ask for your crime reference number that you received when you reported the theft, so do remember to note that down.
                    </p>
                </div>

            </div>
        </BlogPage>
    )
}
