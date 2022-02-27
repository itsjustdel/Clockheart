import { useState, useEffect } from "react"
import BarterCompleteScreen from "./BarterCompleteScreen";
import BarterPanel from "./BarterPanel";
import BossDeathScreen from "./BossDeathScreen";
import FightPanel from "./FightPanel";
import TalkCompleteScreen from "./TalkCompleteScreen";
import TalkPanel from "./TalkPanel";


const BossGUI = ({characters,setCharacters, currentQuest, items, setItems, selectedItem, setCurrentQuest, quests, setBossOpen}) => {


    const [fightPanel, setFightPanel] = useState(false)
    const [talkPanel, setTalkPanel] = useState(false)
    const [barterPanel, setBarterPanel] = useState(false)
    const [bossDead, setBossDead] = useState(false)
    const [talkComplete, setTalkComplete] = useState(false)
    const [barterComplete, setBarterComplete] = useState(false)

    const [nextQuest, setNextQuest] = useState({name: "ClockTowerBar"})
    
    useEffect(() => {
        setNextQuest(nextQuests[0])
    }, [])

    //find the next quest by name
    const newQuests = [...quests]
    const nextQuests = newQuests.filter(quest => quest.name == "ClockTowerBar")

    const handleClick = () => {
        setCurrentQuest(nextQuest)
        setBossOpen(false)
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

    const leaveClick = () => {

    }

    const InitialOptions = () => {
        return (<>
            <button onClick={talkClick}>TALK</button>
            <button onClick={banterClick}>BARTER</button>
            <button onClick={fightClick}>FIGHT</button>
            <button>LEAVE</button>
            </>)
    }

    const getBossIdFromQuest = () => {
        if(currentQuest.name == "Rust and Dust")
            return 4
    }

    return(
        <>
            <h1>BOSS GUI</h1>
            {fightPanel == false && bossDead == false && talkComplete == false && barterComplete ==false ? <InitialOptions/> : null}

            {talkPanel == true ? <TalkPanel characters={characters} setCharacters={setCharacters} items={items} setItems={setItems} setFightPanel={setFightPanel} setTalkPanel={setTalkPanel} setCurrentQuest={setCurrentQuest} setTalkComplete={setTalkComplete} /> : null}

            {fightPanel == true ? <FightPanel characters={characters} setCharacters={setCharacters} enemyId={getBossIdFromQuest()} items={items} setItems={setItems} selectedItem={selectedItem} setCurrentQuest={setCurrentQuest} quests={quests} setFightPanel={setFightPanel} setBossOpen={setBossOpen} setBossDead={setBossDead} /> : null}

            {barterPanel == true ? <BarterPanel characters={characters} setCharacters={setCharacters} items={items} setItems={setItems} setBarterPanel={setBarterPanel} setFightPanel={setFightPanel} setCurrentQuest={setCurrentQuest} setBarterComplete={setBarterComplete} /> : null}

            {bossDead == true ? <BossDeathScreen handleClick={handleClick} /> : null}

            {talkComplete == true ? <TalkCompleteScreen handleClick={handleClick} /> : null}

            {barterComplete == true? <BarterCompleteScreen handleClick={handleClick} /> : null }
        </>
    )
}

export default BossGUI;