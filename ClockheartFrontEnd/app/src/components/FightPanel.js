import { useState } from "react"
import BossTurn from "./BossTurn"
import Music from "./Music"

const FightPanel = ({characters ,setCharacters, enemyId}) => {

    const [turn, setTurn] = useState(0)

    const attackClick = () => {
        console.log("enemy id  = " + enemyId)
        //remove health form enmy by attack strength
        const attackStrength = 5;//to do

        //find enemy in character array
        const newCharacters = [...characters]
        for(let i = 0; i < newCharacters.length; i++)
        { 
            if(characters[i].id == enemyId){
                //create copy
                const newCharacter = characters[i]
                newCharacter.healthPoints -= attackStrength
                //update characters in state with new character
                setCharacters(newCharacters)

                if(characters[i].healthPoints <= 0 ){
                    //boss is dead
                    console.log("Boss is dead")

                }else{
                    //boss turn
                    console.log("setting turn to 1")
                    setTurn(1)
                }

                return
            }
        }
    }

    const FightButtons = () => {
        return(
            <>
                <button onClick={attackClick}>Attack</button>
                <button>Heal</button>

                
            </>
        )
    }

    const PlayerHealth = () => {
        return(
        <>
            <h3>PlayerHealth...</h3> 
        </>
        )
    }

    
    const EnemyHealth = () => {
        return(
        <>
            <h3>EnemyHealth...</h3> 
        </>
        )
    }

    return(
        <>
            <h1>FIGHT PANEL</h1>
            {turn == 0 ? <FightButtons/>:<BossTurn characters={characters} setCharacters={setCharacters} enemyId={enemyId} setTurn={setTurn}/>}

            <PlayerHealth/>
            <EnemyHealth/>
            <Music url={"/BattleMusic.mp3"} soundLevel={0.1}/>
        
        </>
    )

}

export default FightPanel