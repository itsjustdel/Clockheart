import { useEffect, useState } from "react"
import { getPlayerItems } from "../Services/ItemServices"

const PlayerItemsGUI = ({characters, items, setSelectedItem, selectedItem}) => {

    let playerCash = 0
    if(characters.length > 0){
        playerCash = characters[0].currency
    }
    
    const handleSelectedItemClick = (event) => {
        const index = event.target.value   
        console.log("Selected item: ", items[index])
        setSelectedItem(items[index])
    }

    const playerItems = items.map((item, index) => {  
        const filename = item.name.replace(/ /g, "_");
        if(item.character.id === 1)
            return <li className={`playerItem ${selectedItem !== null && item.id === selectedItem.id ? "selected-item" : ""}`} key={index}>
                            <input onClick={handleSelectedItemClick} value={index} type="image" src={`/newPngs/${filename}.png`} />
                    </li>
    })

    return(
        <>        
            <ul className='playerItemList'>
            {/* <img className="playerItem"  src={`/newPngs/currency.png`}></img> */}
                <li className="playerItem currency">${playerCash}</li>
                {playerItems}
            </ul>
        </>
    )
}

export default PlayerItemsGUI