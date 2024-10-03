import {FC} from "react";
import {Button} from "../../../../../../shared/ui";
import {useStorageData, useStorageSetter} from "../../../../../../shared/lib/storage";
import {Article, articleEntityKey, Articles} from "../../../../model";
import s from './ArticleCard.module.css'
import {useNavigate} from "react-router-dom";

export const ArticleCard: FC<Article> = (props) => {
    const articles = useStorageData<Articles>(articleEntityKey)
    const setStorageData = useStorageSetter()
    const navigate = useNavigate()

    const onArticleRemoveClick = () => {
        const localArticles = Array.isArray(articles) ? articles : []
        setStorageData(localArticles.filter(article => article.id !== props.id), articleEntityKey)
    }

    const onArticleEditClick = () => {
        navigate(`/editArticle/${props.id}`)
    }

    return (
        <div className={s.card}>
            <h2 className={s.title}>{props.title}</h2>
            <p className={s.content}>{props.content}</p>
            <div className={s.buttons}>
                <Button onClick={onArticleRemoveClick}>Remove</Button>
                <Button onClick={onArticleEditClick}>Edit</Button>
            </div>
        </div>
    )
}