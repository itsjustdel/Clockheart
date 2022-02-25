import { useState } from "react"
import BossTurn from "./BossTurn"
import { getPlayerItems, updateItemInTable } from "./ItemServices"
import Music from "./Music"

const FightPanel = ({characters ,setCharacters, enemyId, items, setItems}) => {
    const [turn, setTurn] = useState(0)
    const newItems = [...items]
    

    const transferItemsToPlayer = () => {
        newItems.map((item) => {
            if(item.character.id === enemyId){
                item.character.id = 1
            }
        })
        setItems(newItems)
        console.log(getPlayerItems(items))

        getPlayerItems(newItems).map((item) => {
            return updateItemInTable(item)
        })
    }

    const attackClick = () => {
        console.log("enemy id  = " + enemyId)
        //remove health form enmy by attack strength
        const attackStrength = 50;//to do

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
                console.log("Player health after attack =" + characters[0].healthPoints)

                if(characters[i].healthPoints <= 0 ){
                    //boss is dead
                    console.log("Boss is dead")
                    transferItemsToPlayer()
                }else{
                    //boss turn
                    console.log("setting turn to 1")
                    setTurn(1)
                }

                return
            }
        }
    }

    const healClick= () => {
        //Below will be set to the used item's healing value
        const healing = 5;

        const newCharacters = [...characters]
        const newCharacter = newCharacters[0]
        console.log("player health after heal= " + newCharacter.healthPoints)
        if (newCharacter.healthPoints < 100){
            newCharacter.healthPoints += healing
        }
        setCharacters(newCharacters)

        return
    }

    const FightButtons = () => {
        return(
            <>
                <button onClick={attackClick}>Attack</button>
                <button onClick={healClick}>Heal</button>

                
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
            <Music url={"/BattleMusic.mp3"} soundLevel={0.05}/>
        
        </>
    )

}

export default FightPanel