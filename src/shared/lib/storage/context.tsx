import {createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useState} from "react";
import {SetStorageData, StorageContext} from "./types.ts";
import {entities} from "../../../app/entities.ts";

const Context = createContext<StorageContext>(undefined)

const parseStorageData = () => {
    const localData: Record<string, unknown> = {}

    for (const entity of entities.values()) {
        localData[entity.key] = entity.value
    }

    return localData
}

export const StorageProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, _setData] = useState<Record<string, unknown>>(parseStorageData())

    const setData: SetStorageData = useCallback((data, key) => {
        const entity = entities.get(key)
        if (!entity) throw new Error(`Don't have entity with key ${key}`)

        entity.write(data)
        _setData(parseStorageData())
    }, [])

    const providerValue = useMemo(() => ({
        data, setData
    }), [setData, data])

    return (
        <Context.Provider value={providerValue}>
            {children}
        </Context.Provider>
    )
}

export const useStorageData = <T=unknown>(key: string) => {
    const { data } = useContext(Context)!
    return data[key] as T
}

export const useStorageSetter  = () => {
    const { setData } = useContext(Context)!
    return setData
}