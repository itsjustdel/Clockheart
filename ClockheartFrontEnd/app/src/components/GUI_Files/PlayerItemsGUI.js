import { useEffect, useState } from "react"
import { getPlayerItems } from "./ItemServices"

const PlayerItemsGUI = ({characters, items, setSelectedItem}) => {

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
            return <li className='playerItem' key={index}>
                        <button onClick={handleSelectedItemClick} value={index}>{item.name}</button>
                        <img className='playerItemImage' src={`/newPngs/${filename}.png`}/>
                        
                    </li>
    })

    return(
        <>
        <h2>Player Item List</h2>
        {/* <p>Currency: {player.currency} </p> */}
            <ul className='playerItemList'>
                {playerItems}
            </ul>
        </>
    )
}

export default PlayerItemsGUI