import {createBrowserRouter} from "react-router-dom";
import {articlesRoutes} from "../modules/articles";
import {Layout} from "../shared/ui";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            ...articlesRoutes
        ],
    }
])