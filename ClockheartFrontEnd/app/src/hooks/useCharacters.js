import { useEffect } from "react"

export const useCharacters = (defaultCharacters, setDefaultCharacters, setCharacters) => {

    useEffect(() => {
        getCharacters()
    }, [])

    useEffect(() => {
        setUsableCharacters()
    }, [defaultCharacters])

    const getCharacters = () => {
        fetch('http://localhost:8080/characters')
            .then(res => res.json())
            .then(characterData => setDefaultCharacters(characterData))
    }

    const setUsableCharacters = () => {
        const usableCharacters = [...defaultCharacters]
        setCharacters(usableCharacters)
    }
}

