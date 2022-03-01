import { useEffect, useState } from "react"
import { getPlayerItems } from "../Services/ItemServices"

const PlayerItemsGUI = ({characters, items, setSelectedItem, selectedItem}) => {

    // const [player, setPlayer] = useState(null)

    // useEffect(() => {
    //     const newPlayer = characters.filter((character) => {
    //         return character.id === 1
    //     })[0]
    //     setPlayer(newPlayer)
    // }, [characters])

    const handleSelectedItemClick = (event) => {
        const index = event.target.value   
        console.log("Selected item: ", items[index])
        setSelectedItem(items[index])
    }

    const playerItems = items.map((item, index) => {  
        const filename = item.name.replace(/ /g, "_");
        if(item.character.id === 1)
            return <li className={`playerItem ${selectedItem !== null && item.id === selectedItem.id ? "selected-item" : ""}`} key={index}>
                        {/* <button onClick={handleSelectedItemClick} value={index}>{item.name}</button> */}
                        {/* <img className='playerItemImage' src={`/newPngs/${filename}.png`}/> */}

                        {/* <div className ="shopItemImage">                             */}
                            <input onClick={handleSelectedItemClick} value={index} type="image" src={`/newPngs/${filename}.png`} />
                        {/* </div> */}
                        
                    </li>
    })

    return(
        <>        
            <ul className='playerItemList'>
                {playerItems}
            </ul>
        </>
    )
}

export default PlayerItemsGUI