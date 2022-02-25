import CharacterCreation from "./CharacterCreation"

const CharacterCreationGUI = ({characters, updateCharacters}) => {
    

    return(
        <>
            <CharacterCreation characters={characters} updateCharacters={updateCharacters}/>
        </>
    )
}

export default CharacterCreationGUI