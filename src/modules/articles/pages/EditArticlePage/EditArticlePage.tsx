import {useLoaderData, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {useStorageData, useStorageSetter} from "../../../../shared/lib/storage";
import {articleEntityKey, Articles} from "../../model";
import {useMemo} from "react";
import {Button, Input, Modal, Textarea, Title} from "../../../../shared/ui";
import s from './EditArticlePage.module.css'

type FormFields = {
    title: string
    content: string
}

export const EditArticlePage = () => {
    const articleId = useLoaderData()
    const articles = useStorageData<Articles>(articleEntityKey)
    const setStorageData = useStorageSetter()
    const navigate = useNavigate()

    const article = useMemo(
        () => articles.find(a => a.id === articleId),
        [articles, articleId]
    )

    const { register, handleSubmit } = useForm<FormFields>({
        defaultValues: {
            title: article?.title ?? "",
            content: article?.content ?? ""
        }
    })

    const onEditFinished: SubmitHandler<FormFields> = (data) => {
        setStorageData(
            articles.map(a => {
                if (a.id !== articleId) return a;
                return {id: articleId, ...data}
            }),
            articleEntityKey
        )
        navigate('/')
    }

    const onCancelClick = () => {
        navigate('/')
    }

    return (
        <Modal>
            <Title>Edit "{article?.title}"</Title>

            <form className={s.form} onSubmit={handleSubmit(onEditFinished)}>
                <p>Title</p>
                <Input placeholder='Enter title' {...register('title')} />
                <p>Content</p>
                <Textarea placeholder='Enter content' {...register('content')} />
                <div className={s.buttons}>
                    <Button type='submit'>Submit</Button>
                    <Button type='button' onClick={onCancelClick}>Cancel</Button>
                </div>
            </form>
        </Modal>
    )
}