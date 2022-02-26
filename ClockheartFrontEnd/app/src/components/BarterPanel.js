import { useEffect, useState } from "react"
import { getPlayerItems, updateItemInTable } from "./ItemServices"

const BarterPanel = ({characters, items, setItems, setBarterPanel, setFightPanel}) => {

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
            }
        })
        setItems(newItems)
        console.log(getPlayerItems(items))

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
        setFightPanel(true)
        setBarterPanel(false)
    }

    const handleYes = () => {
        
        if(player.currency >= price){
            player.currency -= price
            transferGemToPlayer()
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

export default BarterPanel