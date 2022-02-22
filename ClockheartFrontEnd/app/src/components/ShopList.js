const ShopList = ({ shopItems, updatePlayerItems }) => {

    const handleItemClick = (event) => {
        console.log("shop item clicked")
        const index = event.target.value;
        console.log(shopItems[index].name)

        
        //update front end
        //add to player (state)
        updatePlayerItems(shopItems[index])
        //remove from shop items
        shopItems.splice(index, 1)
    }

    const names = shopItems.map((shopItem, index) => {
        return <li onClick={handleItemClick} value={index} key ={index}>{shopItem.name}</li>

    })

    return (
        <>
            <h2> Shop Item List</h2>
            <ul>
                {names}
            </ul>
        </>
    )
}

export default ShopList;