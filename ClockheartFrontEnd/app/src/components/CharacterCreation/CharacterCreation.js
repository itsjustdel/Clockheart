import Carousel from 'react-elastic-carousel'
import { useEffect, useState } from 'react'
import ClassType from './ClassType'
import ClassTypeInformation from './ClassTypeInformation'

const CharacterCreation = ({characters, setCharacters, setCurrentQuest, setCharacterCreationOpen}) => {
    
    const [infoToShow, setInfoToShow] = useState()
    const [nextQuest, setNextQuest] = useState()

    useEffect(() => {
        setInfoToShow(Bellum)
    }, [])

    useEffect(() => {
        getQuest()
    }, [])
    
    const Bellum = {
        name: "Bellum",
        intelligence: 5,
        charisma: 5,
        strength: 10,
        info: "The Bellum is the strongest type of Clockheart. With enhancements to the Cerebellum, these Clockhearts wouldnt even break a sweat in combat, due to their increased strength."
    }

    const Cortex = {
        name: "Cortex",
        intelligence: 10,
        charisma: 5,
        strength: 5,
        info: "Cortex's are incredibly intelligent, and the smartest type of Clockheart. With enhancements to the Neo-Cortex, these Clockhearts have the ability to retain any and all information, making them calculated in certain situations."

    }

    const Broca = {
        name: "Broca",
        intelligence: 5,
        charisma: 10,
        strength: 5,
        info: "Broca's have the ability to talk their way in and out of a given situation. With enhancements to the broca area of the brain, these Clockhearts could sell sawdust to a carpenter."
    }

    const types = [Bellum, Cortex, Broca]

    const listOfTypes = types.map((type, index) => {
        return <ClassType type={type} key={index}/>
        
    })

    const handleChange = (currentItem, pageIndex) => {
        setInfoToShow(types[pageIndex])
    }

    let newCharacters = [...characters]
    let newCharacter = newCharacters[0]

    const getQuest = () => {
        // fetch('http://localhost:8080/quests?questName=ClockTowerBar')
        //     .then(res => res.json())
        //     .then(nextQuest => setNextQuest(nextQuest))

        setNextQuest( {
            name: "ClockTowerBar"
        })
    }
   
    const handleSubmit = (event) => {
        event.preventDefault()
        const newName = event.target.name.value
        const newClass = infoToShow.name
        newCharacter.name = newName
        newCharacter.type = newClass
        newCharacter.charisma = infoToShow.charisma
        newCharacter.intelligence = infoToShow.intelligence
        newCharacter.strength = infoToShow.strength
        
        updateCharacters(0, newCharacter)

     

        const str = `http://localhost:8080/characters/1`
        fetch(str, {
            method: 'PUT',
            body: JSON.stringify(newCharacter),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json()) 

        setCurrentQuest(nextQuest)
        setCharacterCreationOpen(false)

    }

    const updateCharacters = (index, newCharacter) => {
        const newCharacters = [...characters]
        newCharacters[index] = newCharacter
        setCharacters(newCharacters)
    }

    return(
        <>
            <div className="npcItems">
            <form onSubmit={handleSubmit}>
                <div className="create-name">
                <label htmlFor="name">Enter your name: </label>
                <input type="text" className="name-box" id="create-name" name="name"/>
                </div>
                <Carousel itemsToShow={1} enableMouseSwipe={true} enableAutoPlay={false} autoPlaySpeed={10000} onChange={handleChange}>
                    {listOfTypes}
                </Carousel>
                <input className="character-submit" type="submit" value="Submit" />
            </form>    
            <div className='ccItem'>
            {infoToShow == null ? null : <ClassTypeInformation type={infoToShow} />}
            </div>
            </div>
        </>
    )
}

export default CharacterCreation