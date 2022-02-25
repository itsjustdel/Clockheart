import Carousel from 'react-elastic-carousel'
import { useEffect, useState } from 'react'
import Type from "./Type"
import Information from './Information'

const CharacterCreation = ({characters, updateCharacter}) => {
    
    const [infoToShow, setInfoToShow] = useState()

    useEffect(() => {
        setInfoToShow(Bellum)
    }, [])
    
    const Bellum = {
        name: "Bellum",
        intelligence: 5,
        charisma: 5,
        strength: 10
    }

    const Cortex = {
        name: "Cortex",
        intelligence: 10,
        charisma: 5,
        strength: 5
    }

    const Broca = {
        name: "Broca",
        intelligence: 5,
        charisma: 10,
        strength: 5
    }

    const types = [Bellum, Cortex, Broca]

    const listOfTypes = types.map((type, index) => {
        return <Type type={type} key={index}/>
        
    })

    const handleChange = (currentItem, pageIndex) => {
        setInfoToShow(types[pageIndex])
    }

    let newCharacters = [...characters]
    let newCharacter = newCharacters[0]
   
    const handleSubmit = (event) => {
        event.preventDefault()
        const newName = event.target.name.value
        const newClass = infoToShow.name
        newCharacter.name = newName
        newCharacter.type = newClass
        newCharacter.charisma = infoToShow.charisma
        newCharacter.intelligence = infoToShow.intelligence
        newCharacter.strength = infoToShow.strength
        
        updateCharacter(1, newCharacter)

        const str = `/characters/${1}`
        fetch(str, {
            method: 'PUT',
            body: JSON.stringify(newCharacter),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json()) 

    }



    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter your name: </label>
                <input type="text" id="name" name="name"/>
                <Carousel itemsToShow={1} enableMouseSwipe={true} enableAutoPlay={false} autoPlaySpeed={10000} onChange={handleChange}>
                    {listOfTypes}
                </Carousel>
                <input type="submit" value="Submit" />
            </form>    

            {infoToShow == null ? null : <Information type={infoToShow} />}
                
        </>
    )
}

export default CharacterCreation