import { useState, useEffect } from "react"
import BarterCompleteScreenGUI from "./BarterCompleteScreenGUI";
import BarterPanelGUI from "./BarterPanelGUI";
import BossDeathScreenGUI from "./BossDeathScreenGUI";
import FightPanelGUI from "./FightPanelGUI";
import TalkCompleteScreenGUI from "./TalkCompleteScreenGUI";
import TalkPanelGUI from "./TalkPanelGUI";
import TalkFailedScreenGUI from "./TalkFailedScreenGUI";
import BarterCantAffordScreenGUI from "./BarterCantAffordScreenGUI";
import BarterFailedScreenGUI from "./BarterFailedScreenGUI";
import GameOverScreenGUI from "./GameOverScreenGUI";
import { updateItemInTable } from "../Services/ItemServices";
import {updateCharacterInTable} from "../Services/CharacterServices"



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
    
    const [text, setText] = useState("Welcome, I'm the boss!")

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
        setText("Choose your strongest weapon and ATTACK!!")
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
        setText("Let's have a chat...")
    }

    const fightClick = () =>{
        //opens fightpanel
        setFightPanel(true)
        setText("Choose your strongest weapon and ATTACK!!")
    }
    
    const banterClick = () => {
        setBarterPanel(true)
    }

    const InitialOptions = () => {
        return (
             <div className="bossItems">
                <ul >
                    <li className='questItem'>                    
                        <button  onClick={talkClick}>TALK</button>                    
                    </li>
                    <li className='questItem'>
                        <button onClick={banterClick}>BARTER</button>
                    </li>
                    <li className='questItem'>
                        <button onClick={fightClick}>FIGHT</button>
                    </li>
                    <li className='questItem'>
                        <button onClick={handleClick}>LEAVE</button>
                    </li>                    
                </ul>
            </div>
            )
    }

    const getBossIdFromQuest = () => {
        if(currentQuest.name == "Rust and Dust")
            return 4
    }

    return(
       
        <div className="bossContainer">
            <div className="npcPortraitQuest"></div>
            <div className="portraitPlayer"></div>

            
            
            {fightPanel == false && bossDead == false && talkComplete == false && barterComplete == false && barterCantAfford == false &&  barterFailed == false && talkFailed == false && playerDead == false && barterPanel==false? <InitialOptions/> : null}

            {talkPanel == true ? <TalkPanelGUI characters={characters} setCharacters={setCharacters} items={items} setItems={setItems} setFightPanel={setFightPanel} setTalkPanel={setTalkPanel} setCurrentQuest={setCurrentQuest} setTalkComplete={setTalkComplete} setTalkFailed={setTalkFailed} setText={setText}/> : null}

            {fightPanel == true ? <FightPanelGUI characters={characters} setCharacters={setCharacters} enemyId={getBossIdFromQuest()} items={items} setItems={setItems} selectedItem={selectedItem} setCurrentQuest={setCurrentQuest} quests={quests} setFightPanel={setFightPanel} setBossOpen={setBossOpen} setBossDead={setBossDead} setPlayerDead={setPlayerDead} /> : null}

            {barterPanel == true ? <BarterPanelGUI characters={characters} setCharacters={setCharacters} items={items} setItems={setItems} setBarterPanel={setBarterPanel} setFightPanel={setFightPanel} setCurrentQuest={setCurrentQuest} setBarterComplete={setBarterComplete} setBarterFailed={setBarterFailed} setBarterCantAfford={setBarterCantAfford} setText={setText} /> : null}


            <div className="bossText">                
                <h1>{text}</h1>
            </div>


            {bossDead == true ? <BossDeathScreenGUI handleClick={handleClick} /> : null}

            {talkComplete == true ? <TalkCompleteScreenGUI handleClick={handleClick} /> : null}

            {barterComplete == true? <BarterCompleteScreenGUI handleClick={handleClick} /> : null }

            {talkFailed == true ? <TalkFailedScreenGUI handleFight={handleFight} /> : null}

            {barterFailed == true? <BarterFailedScreenGUI handleFight={handleFight} /> : null }

            {barterCantAfford == true ? <BarterCantAffordScreenGUI handleFight={handleFight} /> : null}

            {playerDead == true ? <GameOverScreenGUI handleDeath={handleDeath}/> : null}
        

        </div>


    )
}

export default BossGUI;