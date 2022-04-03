import { updateCharacterInTable } from "../components/Services/CharacterServices"

export const resetCharacters = (characters, setCharacters) => {
    const charactersToReset = [...characters]
    charactersToReset.forEach((character) => {
        character.currency = 20
        character.healthPoints = 100
        updateCharacterInTable(character)
    })
    setCharacters(charactersToReset)
}