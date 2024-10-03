import {RouteObject} from "react-router-dom";
import {ArticlesPage, CreateArticlePage, EditArticlePage} from "./pages";

export const articlesRoutes: RouteObject[] = [
    {
        path: "/",
        element: <ArticlesPage />
    },
    {
        path: "/createArticle",
        element: <CreateArticlePage />
    },
    {
        path: "/editArticle/:id",
        element: <EditArticlePage />,
        loader: ({params}) => Number(params.id)
    }
]