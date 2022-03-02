import { updateCharacterInTable } from "../Services/CharacterServices"
import { updateItemInTable } from "../Services/ItemServices"
import Carousel from 'react-elastic-carousel'

const ShopListGUI = ({ updateItems, characters, setCharacters, items, setItems, selectedItem, setSelectedItem }) => {
    
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


        console.log("item clcik")
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
            return    <li className='npcItem' key={index}>                          
                        <div>
                            <h1 className ="shopItemName">{item.name}</h1>
                        </div>
                        <div>
                            <h1  className ="shopItemPrice" > $ {item.value}</h1>
                        </div>
                        <div className ="shopItemImage">                            
                            <input onClick={handleBuyItemClick} value={index} type="image" src={`/newPngs/${filename}.png`} />
                        </div>
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
           

                
            <div className="npcContainer">
                <div className="npcPortrait" ></div>               
                <div className="npcItems">
                    <ul className="npcItemList" >
                       
                        <Carousel className="Carousel" pagination={false} verticalMode={true} itemsToShow={4} enableMouseSwipe={true} enableAutoPlay={false} autoPlaySpeed={10000}  >
                        <li className='npcItem'>                            
                        </li>
                        {itemsForSale}
                        <li className='npcItem'>                            
                        </li>
                        </Carousel>                        
                      
                        <li className="sellButton" onClick={handleSellItemClick}>Sell selected item</li>       
                    </ul>
                </div>
            <div className="npcTextBox">
                <h1>
                    Howdy, Everything is for sale, some may call this junk...me? I call them treasures
                </h1>

                </div>
              
            </div>

        </>
    )
}

export default ShopListGUI;