const QuestList = ({quests,setCurrentQuest}) => {
    console.log("Quest List")

    const handleQuestClick = (event) => {
        const questToSet = quests[event.target.value]
        setCurrentQuest(questToSet)        
    }

    const questsMap = quests.map((quest, index) => {          
        return <li onClick={handleQuestClick} value={index} key={index}>{quest}</li>
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