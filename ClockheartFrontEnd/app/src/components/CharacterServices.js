export const updateCharacterInTable = (updatedCharacter) => {
    fetch(`/characters/${updatedCharacter.id}`,{
        method: 'PUT',
        body: JSON.stringify(updatedCharacter),
        headers: { 'Content-Type': 'application/json' }
    }
    )
    .then(res => res.json()) 
}