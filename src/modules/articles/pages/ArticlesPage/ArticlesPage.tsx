import {Grid, Title} from "../../../../shared/ui";
import {ArticlesList, CreateArticle} from "./components";

export const ArticlesPage = () => {
    return (
        <>
            <Title>Articles</Title>

            <Grid>
                <ArticlesList />

                <CreateArticle />
            </Grid>
        </>
    )
}