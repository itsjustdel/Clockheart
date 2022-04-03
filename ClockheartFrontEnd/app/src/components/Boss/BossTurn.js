import { useEffect } from "react"
import { updateCharacterInTable } from "../Services/CharacterServices"

const BossTurn = ({characters, setCharacters, enemyId, setTurn}) => {

    useEffect( () => 
    {
        reducePlayerHealth()
    }, [])

    const randomNumber = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min+1)+min);
      }

    const reducePlayerHealth = () => {

        let boss = characters.filter(function(item)
        {
         return item.id == enemyId;
        })

        //boss attack strength - player's health
        const newCharacters = [...characters]
        let newCharacter = null
        for(let i =0; i < newCharacters.length; i++)
        {
            if(newCharacters[i].id == 1)
            {
                //we found the player 
                newCharacter = newCharacters[i]
                if(newCharacter.healthPoints > boss[0].strength){
                    const bossAttack = boss[0].strength * randomNumber(1, 3)                   
                    newCharacter.healthPoints -= bossAttack;
                }
                else{
                    newCharacter.healthPoints = 0
                }             
            }
        }        
        //resave character array in state
        setCharacters(newCharacters)
        updateCharacterInTable(newCharacter)
        
        //go to player turn
        setTurn(0)
    }

    return (
        <>
           
        </>
    )
}

export default BossTurn