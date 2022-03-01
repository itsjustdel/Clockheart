import { useEffect, useState } from "react"
import { getPlayerItems } from "./ItemServices"

const PlayerItems = ({characters, items, setSelectedItem}) => {

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

export default PlayerItems