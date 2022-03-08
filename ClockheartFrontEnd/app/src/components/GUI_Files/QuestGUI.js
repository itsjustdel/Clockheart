
import { useEffect, useState } from "react"
import BlimpGUI from "./BlimpGUI"
import EndingScreenGUI from "./EndingScreenGUI"
import { getPlayerItems, updateItemInTable } from "../Services/ItemServices"

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
        setCurrentQuest({name: questToSet.name})
        console.log(questToSet);
        console.log(questToSet.name);
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
        if(gemsList.length == 2){
            setEndScreenOpen(true)
        }
        return gemsList.length === 1
    }
   

    const questsMap = quests.map((quest, index) => {          
        //  return <li onClick={handleQuestClick} value={index} key={index}>{quest.name}</li>
        return <li className='questItem' key={index}>
                    <button className="questButton" onClick={handleQuestClick} value={index} >{quest.name}</button>
                </li>
    })

    const handleTicketClick = () => {
        setEndScreenOpen(false)
        setGemCollected(true)
        setCurrentQuest("Ending")
    }

    const handlePlayAgain = () => {
        let newNextQuest = nextQuest
        newNextQuest.name = "Street" 
        setCurrentQuest(newNextQuest)
        const itemsToReset = [...defaultItems]
        console.log(itemsToReset);
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
         <div className="npcContainer">
            <div className="npcPortraitQuest"></div>    
            <div className="npcItems">
            <ul className="npcItemList">
                {/* <li className='npcItem'></li> */}
                {questsMap}
                {/* <li className='npcItem'></li> */}
            </ul>
            </div>
            <div className="npcTextBox">
            <h1>
                Quests.... Gems..... Tickets??
            </h1>

            </div>
                
        </div>
            
        </>
    )} else {
        return(
        <>
            {endScreenOpen == true ? <EndingScreenGUI handleTicketClick={handleTicketClick}/> : null}
            {gemCollected == true ? <BlimpGUI handlePlayAgain={handlePlayAgain} /> : null}                        
        </>
        )
    }
}

export default QuestGUI