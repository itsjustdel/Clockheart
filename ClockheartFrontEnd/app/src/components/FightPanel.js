import { useEffect, useState } from "react"
import BossTurn from "./BossTurn"
import { updateCharacterInTable } from "./CharacterServices"
import { getPlayerItems, updateItemInTable } from "./ItemServices"


const FightPanel = ({characters, setCharacters, enemyId, items, setItems, selectedItem, setCurrentQuest, quests, setFightPanel, setBossOpen}) => {
    const [turn, setTurn] = useState(0)
    const [enemy, setEnemy] = useState(null)
    const newItems = [...items]
    const newCharacters = [...characters]
    const [nextQuest, setNextQuest] = useState({name: "ClockTowerBar"})
    const player = newCharacters[0]


    useEffect(() => {
        PlayerHealth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [turn])

    useEffect(() => {
        setEnemy(findEnemy())
    }, [])

    useEffect(() => {
        setNextQuest(nextQuests[0])
    }, [])

    //find the next quest by name
    const newQuests = [...quests]
    const nextQuests = newQuests.filter(quest => quest.name == "ClockTowerBar")
    

    //transfers each of boss's items to player and updates DB
    const transferItemsToPlayer = () => {
        newItems.map((item) => {
            if(item.name.includes("Gem") && item.character.id === enemyId){
                item.character.id = player.id
            }
        })
        const bossItems = newItems.filter((item) => {
            return item.character.id === enemyId
        })
        .map((item) => {
            return item
        })

        for (let i = bossItems.length -1; i > 0; i--) {
                let j = Math.floor(Math.random() * i)
                let k = bossItems[i]
                bossItems[i] = bossItems[j]
                bossItems[j] = k
            }
        // console.log(bossItems)

        const earnedItems = bossItems.slice(0,2)
        // console.log(earnedItems)

        newItems.map((item) => {
            if(item.id === earnedItems[0].id || item.id === earnedItems[1].id){
                item.character.id = player.id
            }
        })
        setItems(newItems)
        // console.log(getPlayerItems(items))

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
        let attackStrength = 1
        if(selectedItem !== null){
            attackStrength = selectedItem.damage
        }
        
        //remove health form enemy by attack strength
        if(player.strength === 10){
            attackStrength += 5
        }
        
        console.log("attack strength: " + attackStrength)

        if(attackStrength !== undefined){
            if(enemy.healthPoints > attackStrength){
                enemy.healthPoints -= attackStrength
            }
            else{
                enemy.healthPoints = 0
            }
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
            setCurrentQuest(nextQuest)
            setFightPanel(false)
            setBossOpen(false)
        }else{
            //boss turn
            console.log("setting turn to 1")
            setTurn(1)
        }

        return
    }

    const healClick= () => {
        //Below will be set to the used item's healing value
        // const healing = 5;
        // console.log("selected item healing: " + selectedItem.healing)
        let healing = 0
        if(selectedItem !== null){
            healing = selectedItem.healing
        }
    
        if(healing !== undefined){
            if (player.healthPoints + healing < 100){
                player.healthPoints += healing
            }
            else{
                player.healthPoints = 100
            }
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


    //displays the players health as attacks happen
    const PlayerHealth = () => {
        const newCharacter = newCharacters[0]

        return(
        <>
            <h3>PlayerHealth...</h3>
            {newCharacter.healthPoints}
        </>
        )
    }

    //displays the enemies health as attacks happen
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
        </>
    )

}
    
export default FightPanel