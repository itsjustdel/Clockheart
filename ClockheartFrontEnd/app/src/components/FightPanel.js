import { useState } from "react"

const FightPanel = ({characters ,setCharacters, enemyID}) => {

    const [turn, setTurn] = useState(0)
    const attackClick = () => {
        //remove health form enmy by attack strength
        const attackStrength = 5;//to do
        

        //find enemy in character array
        const newCharacters = [...characters]
        for(let character in newCharacters)
        {            
            if(character.id === enemyID){
                //create copy
                const newCharacter = character
                newCharacter.healthPoints -= attackStrength
                //update characters in state with new character
                setCharacters(newCharacters)
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
            {turn == 0 ? <FightButtons/> :  null}

            <PlayerHealth/>
            <EnemyHealth/>
        
        </>
    )

}

export default FightPanel