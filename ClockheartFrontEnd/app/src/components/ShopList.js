const ShopList = ({ updateItems, characters, items }) => {
    console.log("Shop list")

    const handleItemClick = (event) => {
        const index = event.target.value

        //player is always first in character array (but has ID 1! Be careful!)
        const newOwner = characters[0]
        const updatedShopItem = {
            "name": items[index].name,
            "value": items[index].value,
            "damage": items[index].damage,
            "character": newOwner
        }
        updateItems(event.target.value, updatedShopItem)

        const str = `/items/${items[index].id}`
        fetch(str, {
            method: 'PUT',
            body: JSON.stringify(updatedShopItem),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
    }

    const itemsForSale = items.map((item, index) => {
        if (item.character.name == "Zebediah Flint")
            return <li onClick={handleItemClick} value={index} key={index}>{item.name}</li>

    })

    return (
        <>
            <h2> Shop Item List</h2>
            <ul>
                {itemsForSale}
            </ul>
        </>
    )
}

export default ShopList;