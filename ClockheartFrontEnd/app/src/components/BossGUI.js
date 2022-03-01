import { useState, useEffect } from "react"
import BarterCompleteScreen from "./BarterCompleteScreen";
import BarterPanelGUI from "./BarterPanelGUI";
import BossDeathScreenGUI from "./BossDeathScreenGUI";
import FightPanelGUI from "./FightPanelGUI";
import TalkCompleteScreen from "./TalkCompleteScreen";
import TalkPanelGUI from "./TalkPanelGUI";
import TalkFailedScreen from "./TalkFailedScreen";
import BarterCantAffordScreen from "./BarterCantAffordScreen";
import BarterFailedScreen from "./BarterFailedScreen";
import GameOverScreen from "./GameOverScreen";
import { updateItemInTable } from "./ItemServices";
import {updateCharacterInTable} from "./CharacterServices"


const BossGUI = ({characters,setCharacters, currentQuest, items, setItems, selectedItem, setCurrentQuest, quests, setBossOpen, defaultItems, defaultCharacters, resetCharacters}) => {


    const [fightPanel, setFightPanel] = useState(false)
    const [talkPanel, setTalkPanel] = useState(false)
    const [barterPanel, setBarterPanel] = useState(false)
    const [bossDead, setBossDead] = useState(false)
    const [talkComplete, setTalkComplete] = useState(false)
    const [barterComplete, setBarterComplete] = useState(false)
    const [talkFailed, setTalkFailed] = useState(false)
    const [barterFailed, setBarterFailed] = useState(false)
    const [barterCantAfford, setBarterCantAfford] = useState(false)
    const [playerDead, setPlayerDead] = useState(false)

    const [nextQuest, setNextQuest] = useState({name: "ClockTowerBar"})
    


    //find the next quest by name
    const newQuests = [...quests]
    let nextQuests = []
    if(playerDead == false){
         nextQuests = newQuests.filter(quest => quest.name == "ClockTowerBar")
    } 

    const handleClick = () => {
        setCurrentQuest(nextQuest)
        setBossOpen(false)
    }

    const handleFight = () => {
        setTalkFailed(false)
        setBarterFailed(false)
        setBarterCantAfford(false)
        setFightPanel(true)
    }

    const handleDeath = () => {
        let newNextQuest = nextQuest
        newNextQuest.name = "Street" 
        setCurrentQuest(newNextQuest)
        setPlayerDead(false)
        setBossOpen(false)
        const itemsToReset = [...defaultItems]
        setItems(itemsToReset)
        itemsToReset.forEach((item) => {
            updateItemInTable(item)
        })
        resetCharacters()
    }

    const talkClick = () =>{
        setTalkPanel(true)
    }

    const fightClick = () =>{
        //opens fightpanel
        setFightPanel(true)
    }
    
    const banterClick = () => {
        setBarterPanel(true)
    }

    const InitialOptions = () => {
        return (<>
            <button onClick={talkClick}>TALK</button>
            <button onClick={banterClick}>BARTER</button>
            <button onClick={fightClick}>FIGHT</button>
            <button onClick={handleClick}>LEAVE</button>
            </>)
    }

    const getBossIdFromQuest = () => {
        if(currentQuest.name == "Rust and Dust")
            return 4
    }

    return(
        <>
            <h1>BOSS GUI</h1>
            {fightPanel == false && bossDead == false && talkComplete == false && barterComplete == false && barterCantAfford == false &&  barterFailed == false && talkFailed == false && playerDead == false ? <InitialOptions/> : null}

            {talkPanel == true ? <TalkPanelGUI characters={characters} setCharacters={setCharacters} items={items} setItems={setItems} setFightPanel={setFightPanel} setTalkPanel={setTalkPanel} setCurrentQuest={setCurrentQuest} setTalkComplete={setTalkComplete} setTalkFailed={setTalkFailed} /> : null}

            {fightPanel == true ? <FightPanelGUI characters={characters} setCharacters={setCharacters} enemyId={getBossIdFromQuest()} items={items} setItems={setItems} selectedItem={selectedItem} setCurrentQuest={setCurrentQuest} quests={quests} setFightPanel={setFightPanel} setBossOpen={setBossOpen} setBossDead={setBossDead} setPlayerDead={setPlayerDead} /> : null}

            {barterPanel == true ? <BarterPanelGUI characters={characters} setCharacters={setCharacters} items={items} setItems={setItems} setBarterPanel={setBarterPanel} setFightPanel={setFightPanel} setCurrentQuest={setCurrentQuest} setBarterComplete={setBarterComplete} setBarterFailed={setBarterFailed} setBarterCantAfford={setBarterCantAfford} /> : null}

            {bossDead == true ? <BossDeathScreenGUI handleClick={handleClick} /> : null}

            {talkComplete == true ? <TalkCompleteScreen handleClick={handleClick} /> : null}

            {barterComplete == true? <BarterCompleteScreen handleClick={handleClick} /> : null }

            {talkFailed == true ? <TalkFailedScreen handleFight={handleFight} /> : null}

            {barterFailed == true? <BarterFailedScreen handleFight={handleFight} /> : null }

            {barterCantAfford == true ? <BarterCantAffordScreen handleFight={handleFight} /> : null}

            {playerDead == true ? <GameOverScreen handleDeath={handleDeath}/> : null}
        </>
    )
}

export default BossGUI;