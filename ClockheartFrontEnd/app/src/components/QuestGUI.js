
import { useEffect, useState } from "react"
import Blimp from "./Blimp"
import EndingScreenGUI from "./EndingScreenGUI"
import { getPlayerItems, updateItemInTable } from "./ItemServices"

const QuestGUI = ({characters, quests, setQuests, setCurrentQuest, setQuestGiverOpen, items, defaultItems, resetCharacters, setItems}) => {

    const [gemCollected, setGemCollected] = useState(false)
    const [endScreenOpen, setEndScreenOpen] = useState(false)
    const [nextQuest, setNextQuest] = useState({name: "ClockTowerBar"})

    useEffect(() => {
        allGemsCollected()
    }, [])

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
        fetch(`http://localhost:8080/quests/${questToSet.id}`,{
            method: 'PUT',
            body: JSON.stringify(questToSet),
            headers: { 'Content-Type': 'application/json' }
        })
        .then (res => res.json())
    }

    const allGemsCollected = () => {
        const gemsList = getPlayerItems(items).filter((item) => {
            return item.name.includes('Gem')
        })
        console.log(gemsList)
        if(gemsList.length == 1){
            setEndScreenOpen(true)
        }
        return gemsList.length === 1
    }
   

    const questsMap = quests.map((quest, index) => {          
        return <li onClick={handleQuestClick} value={index} key={index}>{quest.name}</li>
    })

    const handleTicketClick = () => {
        setEndScreenOpen(false)
        setGemCollected(true)
    }

    const handlePlayAgain = () => {
        let newNextQuest = nextQuest
        newNextQuest.name = "Street" 
        setCurrentQuest(newNextQuest)
        const itemsToReset = [...defaultItems]
        setItems(itemsToReset)
        itemsToReset.forEach((item) => {
            updateItemInTable(item)
        })
        console.log(itemsToReset);
        resetCharacters()
        setQuestGiverOpen(false)
    }

    if(gemCollected == false && endScreenOpen == false){
    return(
        <>
        <h2>Quest List</h2>
            <ul>
                {questsMap}
            </ul>
        </>
    )} else {
        return(
        <>
            {endScreenOpen == true ? <EndingScreenGUI handleTicketClick={handleTicketClick}/> : null}
            {gemCollected == true ? <Blimp handlePlayAgain={handlePlayAgain} /> : null}
        </>
        )
    }
}

export default QuestGUI