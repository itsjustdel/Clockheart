import { updateCharacterInTable } from "../Services/CharacterServices"
import { updateItemInTable } from "../Services/ItemServices"

const ShopListGUI = ({ updateItems, characters, setCharacters, items, setItems, selectedItem, setSelectedItem }) => {
    console.log("Shop list")
    const newItems = [...items]
    const zebediah = characters.filter((character) => {
        return character.id === 2
    })[0]
    // console.log("zebidiah character object: ", zebediah)
    const player = characters.filter((character) => {
        return character.id === 1
    })[0]
    // console.log("player character object", player)   

    const handleBuyItemClick = (event) => {

        // const playerMoney = characters[0].currency
        const index = event.target.value
        if(player.currency >= items[index].value){

            // const updatedCharacter = player
            console.log("characters before purchase: ", characters)
            player.currency -= items[index].value
            const updatedCharacters = characters.map((character) => {
                if(character.id === player.id){
                    return player
                }
                return character
            })
            console.log("characters after purchase: ", updatedCharacters)
            setCharacters(updatedCharacters)
            updateCharacterInTable(player)

            const updatedShopItem = {
                "id": items[index].id,
                "name": items[index].name,
                "value": items[index].value,
                "damage": items[index].damage,
                "healing": items[index].healing,
                "character": player
            }
            updateItems(event.target.value, updatedShopItem)

            const str = `http://localhost:8080/items/${items[index].id}`
            fetch(str, {
                method: 'PUT',
                body: JSON.stringify(updatedShopItem),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json()) 
        }
        else {console.log("NOT ENOUGH MONEY")}

    }

    const itemsForSale = items.map((item, index) => {
        const filename = item.name.replace(/ /g, "_");
        if (item.character.name == "Zebediah Flint")
            return    <li className='npcItem'
                          key={index}>
                        <button onClick={handleBuyItemClick} value={index}>Buy: {item.name}</button>
                        <img className='playerItemImage' src={`/newPngs/${filename}.png`}></img>
                     </li>
    })

    const handleSellItemClick = () => {
        if(selectedItem !== null && !selectedItem.name.includes("Gem")){
            player.currency += selectedItem.value
            const updatedCharacters = characters.map((character) => {
                if(character.id === player.id){
                    return player
                }
                return character
            })
            console.log("characters after sale: ", updatedCharacters)
            setCharacters(updatedCharacters)
            updateCharacterInTable(player)

            selectedItem.character = zebediah
            const updatedItems = newItems.map((item) => {
                if(item.id === selectedItem.id){
                    return selectedItem
                }
                return item
            })
            setItems(updatedItems)
            updateItemInTable(selectedItem)
            setSelectedItem(null)
        }                
    }

    return (
        <>
            <h2>Sell items</h2>
            <p>Player currency = {player.currency}</p>
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

export default ShopListGUI