import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Button, Input, Modal, Textarea, Title} from "../../../../shared/ui";
import {useStorageData, useStorageSetter} from "../../../../shared/lib/storage";
import {generateId} from "../../../../shared/lib/generateId.ts";
import {articleEntityKey, Articles} from "../../model";
import s from './CreateArticlePage.module.css'

type FormFields = {
    title: string
    content: string
}

export const CreateArticlePage = () => {
    const articles = useStorageData<Articles>(articleEntityKey)
    const navigate = useNavigate()
    const setStorageData = useStorageSetter()

    const { register, handleSubmit } = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = ({ title, content }) => {
        const id = generateId()
        const localArticles = articles ? articles : []
        setStorageData([{id, title, content}, ...localArticles], articleEntityKey)
        navigate('/')
    }

    const onGoBackClick = () => {
        navigate('/')
    }

    return (
        <Modal>
            <Title>Create Article</Title>

            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("title", {required: true})}
                    placeholder='Enter title'
                />
                <Textarea
                    {...register("content", {required: true})}
                    placeholder='Enter content'
                />
                <Button type='submit'>Create article</Button>
                <Button type='button' onClick={onGoBackClick}>Go back</Button>
            </form>
        </Modal>
    )
}