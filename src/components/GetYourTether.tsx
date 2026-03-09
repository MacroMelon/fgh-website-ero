import tetherCascadeImage from '@/assets/get_your_tether.png'

export default function(){
    //22%
    return (
        <div className="overflow-x-clip">
            <div className="my-24 px-24 py-3 rotate-[-5.4deg] bg-linear-[185.4deg,white_52%,#F9EDFF_64%,#D8DBFF_90%] -ml-16 -mr-16">
                <div className="flex w-full">
                    <img
                        className="w-1/2"
                        src={tetherCascadeImage}
                        alt="A line of tether tags fading into the distance"
                    />
                    <div className="flex flex-col mt-auto mb-24">
                        <h2 className="mx-auto font-outfit text-big">
                            Get your tether !
                        </h2>
                        <div className="flex gap-9 font-medium font-outfit text-[1.9rem]">
                            <a
                                title="Join the tether Beta program"
                                className="flex mx-auto mt-12 py-3 self-center justify-center w-84 min-w-64 rounded-3xl bg-black text-white line-clamp-1"
                                href="/join-beta"
                            >
                                Get your Tether
                            </a>
                            <a
                                title="See how to get started with Tether"
                                className="flex mx-auto mt-12 py-1.5 self-center justify-center w-84 min-w-64 rounded-3xl bg-white border-black border-8 text-black  line-clamp-1"
                                href="/getting-started"
                            >
                                Tutorials
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}