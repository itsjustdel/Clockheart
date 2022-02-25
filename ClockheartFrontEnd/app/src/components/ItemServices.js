
   
   export const updateItemInTable = (id, updatedItem) => {
        const str = `/items/${id}`
        fetch(str, {
            method: 'PUT',
            body: JSON.stringify(updatedItem),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }

    export const getPlayerItems = (items) => {
        items.filter((item) => {
                return item.character.id === 1
        })
        .map((item) => {
            return {
                "id": item.id,
                "name": item.name,
                "value": item.value,
                "damage": item.damage,
                "healing": item.healing
            }
        })
    }

        