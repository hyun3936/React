import Like from '../04/Like';
import style from './FrontEnd.module.css';

const FrontArticle = ({ title, href, content }) => {
    return (
        <>
        <article className={style.article} id="divHtml">
            <h2>{title}</h2>
            <div>
                <div className={style.divimg}>
                    <img src={href} alt='html' />
                </div>
                <p>{content}</p>
            </div>
        </article>
        <Like />
        </>
    )
}

export default FrontArticle;
