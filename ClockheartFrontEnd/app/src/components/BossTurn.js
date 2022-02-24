import { useEffect } from "react"

const BossTurn = ({characters, setCharacters, enemyId, setTurn}) => {

    useEffect( () => 
    {
        reducePlayerHealth()
    }, [])

    const reducePlayerHealth = () => {

        let boss = characters.filter(function(item)
        {
         return item.id == enemyId;
        })

        //boss attack strength - player's health
        const newCharacters = [...characters]
        for(let i =0; i < newCharacters.length; i++)
        {
            if(newCharacters[i].id == 1)
            {
                //we found the player                
                newCharacters[i].healthPoints -= boss[0].strength;
            }
        }
        
        //resave character array in state
        setCharacters(newCharacters)
        
        //check for player death?

        //go to player turn
        setTurn(0)
    }

    return (
        <>
           
        </>
    )
}

export default BossTurn