import {StorageEntity} from "./entity.ts";

export type EntitiesRecord = Record<string, StorageEntity>

export type SetStorageData = (data: unknown, key: string) => unknown

export type StorageContext = {
    data: Record<string, unknown>
    setData: SetStorageData
} | undefined


