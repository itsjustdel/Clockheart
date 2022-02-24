import { useState } from "react"
import FightPanel from "./FightPanel";

const BossGUI = ({characters,setCharacters, currentQuest}) => {

    const [fightPanel, setFightPanel] = useState(false)

    const talkClick = () =>{

    }

    const fightClick = () =>{
        //opens fightpanel
        setFightPanel(true)
    }

    const leaveClick = () => {

    }

    const InitialOptions = () => {
        return (<>
            <button>TALK</button>
            <button onClick={fightClick}>FIGHT</button>
            <button>LEAVE</button>
            </>)
    }

    const getBossIdFromQuest = () => {
        if(currentQuest == "Rust and Dust")
            return 4
    }

    return(
        <>
            <h1>BOSS GUI</h1>
            {fightPanel == false ? <InitialOptions/> : null}

            {fightPanel == true ? <FightPanel characters={characters} setCharacters={setCharacters} enemyID={4} /> : null}
        </>
    )
}

export default BossGUI;