import {StorageEntity} from "../../../shared/lib/storage";
import {Articles, ArticlesSchema} from "./model.ts";
import {entities} from "../../../app/entities.ts";

export const articleEntityKey = "articles/article"

entities.set(
    articleEntityKey,
    new StorageEntity<Articles>(articleEntityKey, ArticlesSchema)
)

