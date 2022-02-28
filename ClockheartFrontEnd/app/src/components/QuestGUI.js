
import { useEffect, useState } from "react"
import Blimp from "./Blimp"
import EndingScreen from "./EndingScreen"
import { getPlayerItems } from "./ItemServices"

const QuestGUI = ({characters, quests, setQuests, setCurrentQuest, setQuestGiverOpen, items}) => {

    const [gemCollected, setGemCollected] = useState(false)
    const [endScreenOpen, setEndScreenOpen] = useState(false)

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
        fetch(`/quests/${questToSet.id}`,{
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
            {endScreenOpen == true ? <EndingScreen handleTicketClick={handleTicketClick}/> : null}
            {gemCollected == true ? <Blimp/> : null}
        </>
        )
    }
}

export default QuestGUI