import { useEffect, useState } from "react"
import BossTurn from "../Boss/BossTurn"
import { updateCharacterInTable } from "../Services/CharacterServices"
import { getPlayerItems, updateItemInTable } from "../Services/ItemServices"



const FightPanelGUI = ({characters, setCharacters, enemyId, items, setItems, selectedItem, setCurrentQuest, quests, setFightPanel, setBossOpen, setBossDead, setPlayerDead, setText}) => {
    const [turn, setTurn] = useState(0)
    const [enemy, setEnemy] = useState(null)
    const newItems = [...items]
    const newCharacters = [...characters]
    const player = newCharacters[0]
    const zebediah = newCharacters[1]


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
        
        const earnedItems = bossItems.slice(0,2)        

        newItems.map((item) => {
            if(item.id === earnedItems[0].id || item.id === earnedItems[1].id){
                item.character = player
            }
        })
        setItems(newItems)

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
    
        let attackStrength = 1
        if(selectedItem !== null){
            attackStrength = selectedItem.damage
        }
        
        //remove health form enemy by attack strength
        if(player.strength === 10){
            attackStrength += 5
        }

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

        if(enemy.healthPoints <= 0 ){
            //boss is dead            
            transferItemsToPlayer()
            setBossDead(true)
            setFightPanel(false)
            setText("I'll get you next time Clockheart!!")
        }else{
            //boss turn         
            
            setTurn(1)
        }

        if(player.healthPoints <= 0){
            setText("You lost your last screw Clockheart!")
            setPlayerDead(true)
            setFightPanel(false)
            setBossDead(false)
        }

        return
    }

    const healClick= () => {
        let healing = 0
        if(selectedItem !== null){
            healing = selectedItem.healing
        
    
            if(healing !== undefined){
                if (player.healthPoints + healing < 100){
                    player.healthPoints += healing                
                    selectedItem.character = zebediah
                    
                }
                else{
                    player.healthPoints = 100
                    console.log("selected item owner: ", selectedItem.character)
                    selectedItem.character = zebediah
                    console.log("selected item owner", selectedItem.character)
                }
            }
            console.log("items after using healing", items)
            updateItemInTable(selectedItem)
            setCharacters(newCharacters)
            updateCharacterInTable(player)
        }
        return
    }

    const FightButtons = () => {

        
        let bossHealth = 100 
        if(enemy != undefined)
            bossHealth= enemy.healthPoints

        return(
            <> 
            <div className="healthContainerBoss">
                <progress className="healthBar" id="healthBoss" value={bossHealth} max="100"></progress>
            </div>
            <div className="healthContainerPlayer">
                <progress className="healthBar" id="healthPlayer" value={player.healthPoints} max="100"></progress>
                
            </div>

                <div className="bossItems">
                    <ul className="npcItemList">
                        <li className='questItem'>                    
                            <button onClick={attackClick}>Attack</button>        
                        </li>
                        <li className='questItem'>
                            <button onClick={healClick}>Heal</button>
                        </li>
                      
                    </ul>
                </div>
            </>
        )
    }


    //displays the players health as attacks happen
    const PlayerHealth = () => {
        const newCharacter = newCharacters[0]

        return(
        <>
            {/* <h3>PlayerHealth...</h3>
            {newCharacter.healthPoints} */}
        </>
        )
    }

    //displays the enemies health as attacks happen
    const EnemyHealth = () => {
        if(findEnemy().healthPoints > 0){
        return(
        <>
            {/* <h3>EnemyHealth...</h3>
            {findEnemy().healthPoints}              */}
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
            {turn == 0 ? <FightButtons/>:<BossTurn characters={characters} setCharacters={setCharacters} enemyId={enemyId} setTurn={setTurn}/>}

            {/* <PlayerHealth/>
            <EnemyHealth/>         */}
        </>
    )

}
    
export default FightPanelGUI