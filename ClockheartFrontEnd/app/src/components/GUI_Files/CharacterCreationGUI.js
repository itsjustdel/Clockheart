import CharacterCreation from "../CharacterCreation/CharacterCreation"

const CharacterCreationGUI = ({characters, setCharacters, setCurrentQuest, setCharacterCreationOpen}) => {
    

    return(
        <>
            <div className="npcContainer">
            <div className="portraitPlayer"></div>
                <CharacterCreation characters={characters} setCharacters={setCharacters} setCurrentQuest={setCurrentQuest} setCharacterCreationOpen={setCharacterCreationOpen}/>
            <div className="npcTextBox">
            <h1>
                CHOOSE YOUR CLASS CLOCKHEART
            </h1>
            </div>
            </div>
        </>
    )
}

export default CharacterCreationGUI