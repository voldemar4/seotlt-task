import {Button} from "../../../../../shared/ui";
import {useNavigate} from "react-router-dom";

export const CreateArticle = () => {
    const navigate = useNavigate()

    const onCreateArticleClick = () => {
        navigate('/createArticle')
    }

    return (
        <Button onClick={onCreateArticleClick}>
            Create article
        </Button>
    )
}