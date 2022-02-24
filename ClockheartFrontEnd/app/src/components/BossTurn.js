const BossTurn = ({characters, setCharacters}) => {

    const reducePlayerHealth = () => {
        console.log(characters)
        let newArray = characters.filter(function(item)
        {
         return item.id == 4;
        })
    }

    return (
        <>
            <>{reducePlayerHealth()} </>
        </>
    )
}

export default BossTurn