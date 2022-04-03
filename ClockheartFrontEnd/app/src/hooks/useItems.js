import { useEffect } from "react"

export const useItems = (defaultItems, setDefaultItems, setItems) => {

    useEffect(() => {
        getItems()
    }, [])

    useEffect(() => {
        setUsableItems()
    }, [defaultItems])

    const getItems = () => {
        fetch('http://localhost:8080/items')
            .then(res => res.json())
            .then(items => setDefaultItems(items))
    }

    const setUsableItems = () => {
        const usableItems = [...defaultItems]
        setItems(usableItems)
    }
}