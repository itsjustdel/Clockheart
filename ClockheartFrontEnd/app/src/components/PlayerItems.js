import { getPlayerItems } from "./ItemServices"

const PlayerItems = ({items, setSelectedItem}) => {

    const handleItemClick = (event) => {
        const index = event.target.value   
        console.log("Selected item index: " + index)
        setSelectedItem(items[index])
    }

    const playerItems = items.map((item, index) => {  
        if(item.character.id == 1)
            return <li className='playerItem' onClick={handleItemClick} 
                        value={index} key={index}>{item.name}
                        <img className='playerItemImage' src="/newPngs/sword.png"/>
                        
                    </li>
    })

    return(
        <>
        <h2>Player Item List</h2>
            <ul className='playerItemList'>
                {playerItems}
            </ul>
        </>
    )
}

export default PlayerItems