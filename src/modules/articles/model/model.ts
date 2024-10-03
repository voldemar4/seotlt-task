import {z} from "zod";

export const ArticleSchema = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
})

export const ArticlesSchema = z.array(ArticleSchema)

export type Article = z.infer<typeof ArticleSchema>
export type Articles = z.infer<typeof ArticlesSchema>