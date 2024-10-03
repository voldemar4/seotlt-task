import {useStorageData} from "../../../../../../shared/lib/storage";
import {Article, articleEntityKey} from "../../../../model";
import { ArticleCard } from "../ArticleCard";
import s from './ArticlesList.module.css'

export const ArticlesList = () => {
    const articles = useStorageData<Article[]>(articleEntityKey)

    if (!articles || articles?.length === 0) return (
        <h2 className={s.notFound}>No articles found</h2>
    )

    return (
        <div className={s.container}>
            {articles?.map(article => (
                <ArticleCard key={article.id} {...article} />
            ))}
        </div>
    )
}