const ShopList = ({ shop }) => {

    const NamesToMap = () => {
        
        const namesToMap = [];
        for (let i = 0; i < shop.items.length; i++) {
            namesToMap.push(shop.items[i].name)
        }

        return namesToMap.map((name, index) => {
            return <li key={index}>{name}</li>
        })
    }

    const NamesToMapAlternate = () => {
        return Object.keys(shop.items).map(function(key, index) {
            return <li key={index}> Name: {shop.items[key].name} Value: {shop.items[key].value} </li>;
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