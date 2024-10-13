// eslint-disable-next-line react/prop-types
export default function Button ({ title }) {
    return (
        <div className="button">
            <button className="px-6 py-2 bg-blue-800 text-gray-200 shadow-md font-medium rounded-md">
                {title}
            </button>
        </div>
    )
}