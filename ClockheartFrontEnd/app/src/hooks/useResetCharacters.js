import { useEffect } from "react"
import { updateCharacterInTable } from '../components/Services/CharacterServices';

export const useResetCharacters = (characters, setCharacters) => {

    useEffect(() => {
        resetCharacters()
    }, [])

    const resetCharacters = () => {
        const charactersToReset = [...characters]
        charactersToReset.forEach((character) => {
            character.currency = 20
            character.healthPoints = 100
            updateCharacterInTable(character)
        })
        setCharacters(charactersToReset)
    }
}