const ShopList = ({ updateItems, characters, items, updateCharacters }) => {
    console.log("Shop list")

    const handleItemClick = (event) => {

        const playerMoney = characters[0].currency
        const index = event.target.value
       // if(playerMoney >= items[index].value){

            const updatedCharacter = characters[0]
            updatedCharacter.currency -= items[index].value

            updateCharacters(index, updatedCharacter)

            fetch(`/characters/${updatedCharacter.id}`,{
                method: 'PUT',
                body: JSON.stringify(updatedCharacter),
                headers: { 'Content-Type': 'application/json' }
        }
            )
            .then(res => res.json()) 

        const updatedShopItem = {
            "name": items[index].name,
            "value": items[index].value,
            "damage": items[index].damage,
            "character": updatedCharacter
        }
        updateItems(event.target.value, updatedShopItem)

        const str = `/items/${items[index].id}`
        fetch(str, {
            method: 'PUT',
            body: JSON.stringify(updatedShopItem),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json()) 
      //  }
        //else {console.log("NOT ENOUGH MONEY");}
    }

    const itemsForSale = items.map((item, index) => {
        if (item.character.name == "Zebediah Flint")
            return    <li className='npcItem'
                         onClick={handleItemClick} value={index} key={index}>{item.name}
                        <img className='playerItemImage' src="/sword.png"></img>
                     </li>
                          

    })

    return (
        <>
            <h2> Shop Item List</h2>
            <div className="npcContainer">
                <div className="npcItems">
                    <ul className="npcItemList" >
                        {/* {itemsForSale} */}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default ShopList;