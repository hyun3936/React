
export default function TailCard({ imgSrc, title, subtitle, tags }) {
    return (
        <div>
            <div>
                <img src={imgSrc} alt={title} />
            </div>
            <div>
                {title}
            </div>
            <div>
                {subtitle}
            </div>
            <div>
                {tags}
            </div>
        </div>
    )
}
