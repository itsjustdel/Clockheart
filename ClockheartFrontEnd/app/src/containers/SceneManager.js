//libraries, frameworks
import { Vector3 } from 'three';
import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber"
//project defined
import Player from "../components/Player";
import SceneHelper from '../components/SceneHelper';
import ClockTowerBar from '../components/ClockTowerBar';
import Cave from '../components/Cave'
import ShopList from '../components/ShopList'
import PlayerItems from '../components/PlayerItems';
import QuestGUI from '../components/QuestGUI';
import Street from '../components/Street';
import Music from '../components/Music';
import BossGUI from '../components/BossGUI';
import CharacterCreationGUI from '../components/CharacterCreationGUI';
import { getPlayerItems } from '../components/ItemServices';
import BookLocation from '../components/BookLocation';
import BookGUI from '../components/BookGUI';

const SceneManager = () => {

    const [characters, setCharacters] = useState([])
    const [items, setItems] = useState([]);
    const [quests, setQuests] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)

    const [playerStartPosition, setPlayerStartPosition] = useState(new Vector3(-4, 5, 4))
    const [playerTargetPosition, setPlayerTargetPosition] = useState(new Vector3(-4, 5, 4))

    const [shopOpen, setShopOpen] = useState(false)
    const [questGiverOpen, setQuestGiverOpen] = useState(false)
    const [bossOpen, setBossOpen] = useState(false)
    const [characterCreationOpen, setCharacterCreationOpen] = useState(false)
    const [bookLocationOpen, setBookLocationOpen] = useState(false)

    const startLevel = { name: "ClockTowerBar" }
    const [currentQuest, setCurrentQuest] = useState(startLevel)
    

    const playerMesh = useRef()

    useEffect(() => {
        getCharacters()
        getItems()
        getQuests()
    }, [])

    // The below will return an up-to-date array of player items every time an item is bought. DB still updating fine. This isn't stored anywhere though!
    //The getPlayerItems() function can be imported and used anywhere you are passing in items and need to get a list of current player items.
    // useEffect(() => {
    //     const playerItems = getPlayerItems(items)
    //     // console.log(playerItems)
    // }, [items])
    

    const getCharacters = () => {
        fetch('/characters')
            .then(res => res.json())
            .then(characters => setCharacters(characters))
    }

    const getItems = () => {
        fetch('/items')
            .then(res => res.json())
            .then(items => setItems(items))
    }

    const getQuests = () => {
        fetch('/quests')
            .then(res => res.json())
            .then(quests => setQuests(quests))
    }

    const updatePlayerTarget = (newPlayerTargetPosition) => {

        setPlayerStartPosition(playerMesh.current.position) //combine with state below to reduce renders
        setPlayerTargetPosition(newPlayerTargetPosition)
    }
    const updateItems = (index, newItem) => {

        // console.log("update player items - Scene Manager")
        //create new list with current player items and the passed new item

        const newItems = [...items]
        newItems[index] = newItem
        setItems(newItems)
        //we are re-rendering because we are setting state, so we need to update player position in state
        setPlayerStartPosition(playerMesh.current.position)
    }

    const updateCharacters = (index, newCharacter) => {
        const newCharacters = [...characters]
        newCharacters[index] = newCharacter
        setCharacters(newCharacters)
    }

    return (
        <>
             <Canvas gl={{ antialias: false }} orthographic camera={{near:-25,far:25, zoom: 60, position: [0, 5, 0] }}>
                <SceneHelper />

                <Player playerStartPosition={playerStartPosition} playerTargetPosition={playerTargetPosition} mesh={playerMesh} items={items} />


                {currentQuest.name == "ClockTowerBar" ? 
                <ClockTowerBar updatePlayerTarget={updatePlayerTarget} playerMesh={playerMesh}
                    shopOpen={shopOpen} setShopOpen={setShopOpen} questGiverOpen={questGiverOpen}
                    setQuestGiverOpen={setQuestGiverOpen} setPlayerStartPosition={setPlayerStartPosition}
                    bookLocationOpen={bookLocationOpen} setBookLocationOpen={setBookLocationOpen}
                     /> 
                : null}

                {currentQuest.name == "Rust and Dust" ? 
                <Cave playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget} bossOpen ={bossOpen} setBossOpen={setBossOpen} updatePlayerTarget={updatePlayerTarget} /> 
                : null}

                {currentQuest.name == "Street" ? 
                <Street playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget} characters={characters} updateCharacters={updateCharacters} characterCreationOpen={characterCreationOpen} setCharacterCreationOpen={setCharacterCreationOpen} /> 
                : null}
            </Canvas>

           

            <PlayerItems items={items} setSelectedItem={setSelectedItem}/>

            {shopOpen == true ? <ShopList updateItems={updateItems}
                characters={characters}
                setCharacters={setCharacters}
                items={items}
                setItems={setItems}
                selectedItem={selectedItem} 
                setSelectedItem={setSelectedItem}                
                /> : null}

            {questGiverOpen == true ? <QuestGUI characters={characters} quests={quests} setQuests={setQuests}
                setCurrentQuest={setCurrentQuest} setQuestGiverOpen={setQuestGiverOpen} /> : null}                           

            {bossOpen == true ? <BossGUI characters={characters} setCharacters={setCharacters} currentQuest={currentQuest} items={items} setItems={setItems} selectedItem={selectedItem} setCurrentQuest={setCurrentQuest} quests={quests} setBossOpen={setBossOpen}/> : null}


            {characterCreationOpen == true ? <CharacterCreationGUI characters={characters} setCharacters={setCharacters} setCurrentQuest={setCurrentQuest} updateCharacters={updateCharacters} setCharacterCreationOpen={setCharacterCreationOpen} /> : null}

            {bookLocationOpen == true ? <BookGUI setBookLocationOpen={setBookLocationOpen} /> : null}
        </>
    )
}

export default SceneManager