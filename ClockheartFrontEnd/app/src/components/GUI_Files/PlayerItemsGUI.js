import { useEffect, useState } from "react"
import { getPlayerItems } from "../Services/ItemServices"

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
                        <input onClick={handleSelectedItemClick} value={index} type="image" src={`/newPngs/${filename}.png`} />
                    </li>
    })

    return(
        <>        
            <ul className='playerItemList'>
            <img className="playerItem"  src={`/newPngs/currency.png`}></img>
                {playerItems}
            </ul>
        </>
    )
}

export default PlayerItemsGUI