import {Schema} from "zod";



export class StorageEntity<T=unknown> {
    public readonly key: string
    private readonly schema: Schema<T>

    constructor(key: string, schema: Schema<T>) {
        this.key = key
        this.schema = schema
    }

    public write(data: T) {
        this.schema.parse(data)
        localStorage.setItem(this.key, JSON.stringify(data))
    }

    public get value() {
        const data = localStorage.getItem(this.key)
        if (!data) return undefined

        const parsedData = JSON.parse(data) as T
        this.schema.parse(parsedData)
        return parsedData
    }
}