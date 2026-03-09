import twistyTether from '@/assets/home-page/flexi.gif'

export default function(){
    return (
        <div className="flex h-[150dvh] xl:h-104 xl:rounded-3xl xl:mx-24 xl:mb-36 bg-linear-to-b from-[#ECF4FF] to-[#F6F2FF] justify-center align-middle">
            <div className="flex flex-col my-auto mx-12 xl:mx-auto xl:px-10">
                <h2 className="font-outfit text-center text-big-mobile xl:text-big">
                    Join our team of early adopters!!
                </h2>
                <p className="font-inter mt-12 text-center text-[1.8rem]/8.5 xl:text-[1.8rem]/8">
                    Join us to protect belongings and make it clear that stealing won’t be easy anymore.
                </p>
                <a
                    className="flex mx-auto mt-12 py-3 self-center justify-center w-84 rounded-3xl bg-black font-outfit font-medium text-white text-[1.9rem] line-clamp-1"
                    href="/join-beta"
                >
                    Join Beta Testers
                </a>
            </div>
            {/*Image*/}
            <img
                className="hidden xl:block h-full rounded-2xl py-10 mr-10"
                src={twistyTether}
                alt="A GIF of the tether tag twisting along it's vertical axis"
            />
        </div>
    )
}