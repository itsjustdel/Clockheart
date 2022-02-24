const QuestList = ({characters, quests, setQuests, setCurrentQuest, setQuestGiverOpen}) => {
  
    const handleQuestClick = (event) => {
        const questToSet = quests[event.target.value]

        //test for quest complete
        questToSet.gameCharacter = characters[0]
        const newQuests = [...quests]        
        newQuests[event.target.value] = questToSet
        setQuests(newQuests)

        //front end update state
        setCurrentQuest(questToSet)

        //reset gui panel in state
        setQuestGiverOpen(false)

        //back end put        
        fetch(`/quests/${questToSet.id}`,{
            method: 'PUT',
            body: JSON.stringify(questToSet),
            headers: { 'Content-Type': 'application/json' }
        })
        .then (res => res.json())
    }

    const questsMap = quests.map((quest, index) => {          
        return <li onClick={handleQuestClick} value={index} key={index}>{quest.name}</li>
    })

    return(
        <>
        <h2>Quest List</h2>
            <ul>
                {questsMap}
            </ul>
        </>
    )
}

export default QuestList