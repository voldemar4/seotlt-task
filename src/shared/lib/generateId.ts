export const generateId = () => {
    const lastId = Number(localStorage.getItem('__lastId__') ?? 0)
    const newId = lastId + 1

    localStorage.setItem("__lastId__", String(newId))
    return newId
}