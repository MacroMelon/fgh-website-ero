export default function({ blogPageDetails } : { blogPageDetails: {title: string, image: string, imgAlt: string, description: string, url: string }}) {
    return (
        <a
            className=""
            title={"Tether Blog: " + blogPageDetails.title}
            href={blogPageDetails.url}
        >
            <img
                className=""
                src={blogPageDetails.image}
                alt={blogPageDetails.imgAlt}
            />
            <h2>
                {blogPageDetails.title}
            </h2>
            <p>
                {blogPageDetails.description}
            </p>
        </a>
    )
}