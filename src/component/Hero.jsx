
// eslint-disable-next-line react/prop-types
export default function Hero ({title, paragraph, image, content }) {
    return (
        <div className="flex flex-col gap-4 w-full items-center">
            <img src={image} alt="" className="w-40 h-40"/>
            <h1 className="text-3xl font-bold text-red-700">
                {title}
            </h1>
            <p>
               {paragraph}
            </p>

            <p>
                {content}
            </p>
        </div>
    )
}
