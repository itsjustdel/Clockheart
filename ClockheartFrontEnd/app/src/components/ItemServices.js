
   
   export const updateItemInTable = (updatedItem) => {
        const str = `/items/${updatedItem.id}`
        fetch(str, {
            method: 'PUT',
            body: JSON.stringify(updatedItem),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }

    export const getPlayerItems = (items) => {
        const playerItems = 
        
                items.filter((item) => {
                    return item.character.id === 1
                })
                .map((item) => {
                    return {
                    "id": item.id,
                    "name": item.name,
                    "value": item.value,
                    "damage": item.damage,
                    "healing": item.healing,
                    "character": {"id": item.character.id}
                    }
                })
        
        return playerItems
    }

        