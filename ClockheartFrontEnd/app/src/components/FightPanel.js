import { useEffect, useState } from "react"
import BossTurn from "./BossTurn"
import { updateCharacterInTable } from "./CharacterServices"
import { getPlayerItems, updateItemInTable } from "./ItemServices"
import Music from "./Music"

const FightPanel = ({characters ,setCharacters, enemyId, items, setItems}) => {
    const [turn, setTurn] = useState(0)
    const [enemy, setEnemy] = useState(null)
    const newItems = [...items]
    const newCharacters = [...characters]

    useEffect(() => {
        PlayerHealth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [turn])

    useEffect(() => {
        setEnemy(findEnemy())
    }, [])
    
    //transfers each of boss's items to player and updates DB
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

    const findEnemy = () => {
        for(let i = 0; i < newCharacters.length; i++)
        { 
            if(characters[i].id === enemyId){
                //create copy
                const newCharacter = newCharacters[i]
                return newCharacter
    }}}

    const attackClick = () => {
        console.log("enemy id  = " + enemy.id)
        //remove health form enemy by attack strength
        const attackStrength = 20;//to do

        if(enemy.healthPoints > attackStrength){
            enemy.healthPoints -= attackStrength
        }
        else{
            enemy.healthPoints = 0
        }
        //update characters in state with new character
        setCharacters(newCharacters)
        updateCharacterInTable(enemy)
                
        console.log("Player health after attack =" + characters[0].healthPoints)

        if(enemy.healthPoints <= 0 ){
            //boss is dead
            console.log("Boss is dead")
            console.log("Boss healthpoints in state boss dead: " + enemy.healthPoints)
            transferItemsToPlayer()
        }else{
            //boss turn
            console.log("setting turn to 1")
            setTurn(1)
        }

        return
    }

    const healClick= () => {
        //Below will be set to the used item's healing value
        const healing = 5;

        const player = newCharacters[0]
        if (player.healthPoints < 100){
            player.healthPoints += healing
        }
        console.log("player health after heal= " + player.healthPoints)
        setCharacters(newCharacters)
        updateCharacterInTable(player)

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
        const newCharacter = newCharacters[0]

        return(
        <>
            <h3>PlayerHealth...</h3>
            {newCharacter.healthPoints}
        </>
        )
    }

    
    const EnemyHealth = () => {
        if(findEnemy().healthPoints > 0){
        return(
        <>
            <h3>EnemyHealth...</h3>
            {findEnemy().healthPoints} 
        </>
        )}
        else{
            return(
                <>
                    <h3>EnemyHealth...</h3>
                    <h4>KO</h4>
                </>
            )
        }
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