import { useState } from "react"
import BarterPanel from "./BarterPanel";
import FightPanel from "./FightPanel";
import TalkPanel from "./TalkPanel";

const BossGUI = ({characters,setCharacters, currentQuest, items, setItems, selectedItem}) => {

    const [fightPanel, setFightPanel] = useState(false)
    const [talkPanel, setTalkPanel] = useState(false)
    const [barterPanel, setBarterPanel] = useState(false)


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
            {fightPanel == false ? <InitialOptions/> : null}

            {talkPanel == true ? <TalkPanel characters={characters} setCharacters={setCharacters} items={items} setItems={setItems} setFightPanel={setFightPanel} setTalkPanel={setTalkPanel} /> : null}

            {fightPanel == true ? <FightPanel characters={characters} setCharacters={setCharacters} enemyId={getBossIdFromQuest()} items={items} setItems={setItems} selectedItem={selectedItem}/> : null}

            {barterPanel == true ? <BarterPanel characters={characters} setCharacters={setCharacters} items={items} setItems={setItems} setBarterPanel={setBarterPanel} setFightPanel={setFightPanel} /> : null}


        </>
    )
}

export default BossGUI;