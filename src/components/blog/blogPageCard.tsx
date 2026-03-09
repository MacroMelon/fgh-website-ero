export default function({ blogPageDetails } : { blogPageDetails: {title: string, image: string, imgAlt: string, description: string, url: string }}) {
    return (
        <a
            className="flex overflow-clip flex-col shadow-gray-500 shadow-lg rounded-4xl w-90 md:w-190"
            title={"Tether Blog: " + blogPageDetails.title}
            href={blogPageDetails.url}
        >
            <img
                src={blogPageDetails.image}
                alt={blogPageDetails.imgAlt}
            />
            <h2 className="mx-10 md:mx-14 mt-8 font-outfit font-bold text-[1.9rem]/8 md:text-[2.8rem]">
                {blogPageDetails.title}
            </h2>
            <p className="mx-10 md:mx-14 mt-8 mb-14 font-outfit text-small">
                {blogPageDetails.description}
            </p>
        </a>
    )
}