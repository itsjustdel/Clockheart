const ShopList = ({ shopItems, updatePlayerItems }) => {

    const names = shopItems.map((shopItem, index) => {
        return <li value={index} key ={index}>{shopItem.name}</li>

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