const PlayerItems = ({items}) => {

    console.log("player items")
    console.log(items)

    const handleItemClick = () => {    
        console.log("A player item was clicked")
    }

    const playerItems = items.map((item, index) => {  
        if(item.character.id == 1)
            return <li className='playerItem' onClick={handleItemClick} 
                        value={index} key={index}>
                        <img className='playerItemImage' src="/sword.png"/>
                        
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