import { useEffect, useState } from "react"
import { updateCharacterInTable } from "./CharacterServices"
import { getPlayerItems, updateItemInTable } from "./ItemServices"

const BarterPanelGUI = ({characters, setCharacters, items, setItems, setBarterPanel, setBarterComplete, setBarterFailed, setBarterCantAfford}) => {

    const [price, setPrice] = useState(0)
    const newCharacters = [...characters]
    const player = newCharacters[0]
    const newItems = [...items]

    useEffect(() => {
        whatToRender()
    }, [price])

    const transferGemToPlayer = () => {
        newItems.map((item) => {
            //gem hardcoded for now
            if(item.id === 10){
                item.character.id = 1
                player.currency -= price
                console.log("name: " + player.name);
                console.log("currency: " + player.currency);
                console.log("id: " + player.id);
                console.log(player);
            }
        })
        setItems(newItems)
        console.log(getPlayerItems(items))
        setCharacters(newCharacters)
        updateCharacterInTable(player)

        getPlayerItems(newItems).map((item) => {
            return updateItemInTable(item)
        })
    }

    const randomNumber = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min+1)+min);
      }
    

    const handleBarter = () => {
        
        if(player.intelligence === 10){
            setPrice(randomNumber(50, 250))
        }else{
            setPrice(500)
        }
    }

    const handleNo = () => {
        setBarterFailed(true)
        setBarterPanel(false)
    }

    const handleYes = () => {
        
        if(player.currency >= price){
            player.currency -= price
            transferGemToPlayer()
            setBarterComplete(true)
            setBarterPanel(false)
        }else{
            setBarterPanel(false)
            setBarterCantAfford(true)
        }
    }

    const whatToRender = () => {
        if(price === 0){
            return(
                <>
                    <h4>Barter Panel</h4>
                    <button onClick={handleBarter} >Can I Buy the Gem?</button>
                </>
            )
            }else{
                return(
                    <>
                        <h5>That will cost</h5> {price}
                        <button onClick={handleYes}>Gimme!</button> <button onClick={handleNo}>Screw You!</button>
                    </>
                )
            }
    }

    return(
        <>
            {whatToRender()}
        </>
    )
    
}

export default BarterPanelGUI