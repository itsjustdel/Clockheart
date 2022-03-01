import CharacterCreation from "../CharacterCreation/CharacterCreation"

const CharacterCreationGUI = ({characters, updateCharacters, setCurrentQuest, setCharacterCreationOpen}) => {
    

    return(
        <>
            <CharacterCreation characters={characters} updateCharacters={updateCharacters} setCurrentQuest={setCurrentQuest} setCharacterCreationOpen={setCharacterCreationOpen}/>
        </>
    )
}

export default CharacterCreationGUI