import { updateItemInTable } from "./ItemServices"

const ShopList = ({ updateItems, characters, items, setItems, updateCharacters, selectedItem }) => {
    console.log("Shop list")
    const newItems = [...items]
    const zebediah = characters.filter((character) => {
        return character.id === 2
    })[0]
    console.log("zebidiah character object: ", zebediah)
    

    const handleBuyItemClick = (event) => {

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
            "id": items[index].id,
            "name": items[index].name,
            "value": items[index].value,
            "damage": items[index].damage,
            "healing": items[index].healing,
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
                          key={index}>
                        <button onClick={handleBuyItemClick} value={index}>Buy: {item.name}</button>
                        <img className='playerItemImage' src="/newPngs/sword.png"></img>
                     </li>
    })

    const handleSellItemClick = () => {
        // console.log("Selected item: ", selectedItem)
        console.log(newItems)
        const updatedItems = newItems.map((item) => {
            if(item.id == selectedItem.id){
                return {
                    "id": item.id,
                    "name": item.name,
                    "value": item.value,
                    "damage": item.damage,
                    "healing": item.healing,
                    "character": zebediah
                }
            }
            return item
        })
        console.log("updated shop items:", updatedItems)
        setItems(updatedItems)
        // updateItemInTable(selectedItem)
        
    }

    return (
        <>
            <h2>Sell items</h2>
            <button onClick={handleSellItemClick}>Sell selected item</button>
            <h2> Shop Item List</h2>
            <div className="npcContainer">
                <div className="npcItems">
                    <ul className="npcItemList" >
                        {itemsForSale}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default ShopList;