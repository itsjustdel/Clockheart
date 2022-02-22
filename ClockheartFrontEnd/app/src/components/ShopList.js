const ShopList = ({ shop, updatePlayerItems }) => {

    const NamesToMap = () => {
        
        const namesToMap = [];
        for (let i = 0; i < shop.items.length; i++) {
            namesToMap.push(shop.items[i].name)
        }

        return namesToMap.map((name, index) => {
            return <li key={index}>{name}</li>
        })
    }

    const onPurchaseClick = (event, value) => {
        console.log("purchase click")
        //create item object
         console.log(value)
    }

    const NamesToMapAlternate = () => {
        return Object.keys(shop.items).map(function(key, index) {

            return <li key={index} >
                        <a onClick={onPurchaseClick("hi")}>
                            Name: {shop.items[key].name} Value: {shop.items[key].value} 
                        </a>
                    </li>
                    
          });
    }

    return (
        <>
            <h2> Shop Item List</h2>
            <ul>
                <NamesToMapAlternate />
            </ul>
        </>
    )
}

export default ShopList;