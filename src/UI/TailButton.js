export default function TailButton({ caption, handleClick }) {
    return (
        <button className="inline-flex justify-center items-center 
                       p-5 rounded-md m-2
                       hover:bg-sky-200  hover:text-sky-700
                       bg-sky-700 text-white"
            onClick={handleClick}
        >
            {caption}
        </button>
    )
}