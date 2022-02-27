import { updateItemInTable } from "./ItemServices"

const ShopList = ({ updateItems, characters, items, updateCharacters, selectedItem }) => {
    console.log("Shop list")
    const zebediah = characters.filter((character) => {
        return character.id === 2
    })[0]
    // console.log(zebediah)

    const handleBuyClick = (event) => {

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
            return      <li className='npcItem' key={index}>
                        <button onClick={handleBuyClick} value={index} >
                            Buy: {item.name}
                        </button>
                        <img className='playerItemImage' src="/newPngs/sword.png"></img>
                    </li>
    })

    console.log(selectedItem)
    const handleSellClick = () => {
        let updatedPlayerItem = null
        const newItems = [...items]
        newItems.map((item) => {
            if(item.id === selectedItem.id){
                item.character = zebediah
                updatedPlayerItem = item
            }
        })
        console.log(updatedPlayerItem)
        console.log(newItems)
        // updateItemInTable
        
    }

    return (
        <>
            <h2>Sell Items</h2>
            <button onClick={handleSellClick}>Sell selected item</button>
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