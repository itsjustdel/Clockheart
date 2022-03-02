import { useEffect, useState } from "react"
import { updateCharacterInTable } from "../Services/CharacterServices"
import { getPlayerItems, updateItemInTable } from "../Services/ItemServices"

const BarterPanelGUI = ({characters, setCharacters, items, setItems, setBarterPanel, setBarterComplete, setBarterFailed, setBarterCantAfford, setText}) => {

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
            const randomN= randomNumber(50, 250)
            setPrice(randomN)
            setText(`That will cost + ${randomN}`)
        }else{
            setPrice(500)
            setText(`That will cost 500`)
        }
    }

    const handleNo = () => {
        setBarterFailed(true)
        setBarterPanel(false)
        setText("YOU THOUGHT IT WOULD BE CHEAPER?!")
    }

    const handleYes = () => {
        
        if(player.currency >= price){
            player.currency -= price
            transferGemToPlayer()
            setBarterComplete(true)
            setBarterPanel(false)
            setText("Well done, you talk a sweet deal")
        }else{
            setBarterPanel(false)
            setBarterCantAfford(true)
        }
    }

    const whatToRender = () => {
        if(price === 0){
            return(
                <>
                    <div className="bossItems">
                        <ul >
                            <li className='questItem'>                    
                                <button onClick={handleBarter} >Can I Buy the Gem?</button>
                            </li>
                        </ul>
                    </div>                  
                </>
            )
            }else{
                return(
                    <>
                        <div className="bossItems">
                            <ul >
                                <li className='questItem'>                                                    
                                    <button onClick={handleYes}>Gimme!</button> 
                                </li>

                                <li className='questItem'>                    
                                    <button onClick={handleNo}>Screw You!</button>
                                </li>                            
                            </ul>
                        </div>                        
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