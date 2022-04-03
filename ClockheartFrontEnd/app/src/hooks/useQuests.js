import { useEffect } from "react"

export const useQuests = (setQuests) => {

    useEffect(() => {
        getQuests()
    }, [])

    const getQuests = () => {
        fetch('http://localhost:8080/quests')
            .then(res => res.json())
            .then(quests => setQuests(quests))
    }
}