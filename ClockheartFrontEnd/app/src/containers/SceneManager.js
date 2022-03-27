//libraries, frameworks
import { Vector3 } from 'three';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas } from "@react-three/fiber"
//project defined
import Player from "../components/Player";
import SceneHelper from '../components/Scenes/SceneHelper';
import ClockTowerBar from '../components/ClockTowerBar/ClockTowerBar';
import Cave from '../components/Scenes/Cave'
import RockPaperScrews from '../components/Scenes/RockPaperScrews';
import ShopListGUI from '../components/GUI_Files/ShopListGUI'
import PlayerItemsGUI from '../components/GUI_Files/PlayerItemsGUI';
import QuestGUI from '../components/GUI_Files/QuestGUI';
import Street from '../components/Street/Street';
import BossGUI from '../components/GUI_Files/BossGUI';
import CharacterCreationGUI from '../components/GUI_Files/CharacterCreationGUI';
import { updateCharacterInTable } from '../components/Services/CharacterServices';
import BookGUI from '../components/GUI_Files/BookGUI';
import Rain from '../components/Street/Rain';
import DefeatDellyWelly from '../components/Scenes/DefeatDellyWelly';
import BeltAndBraces from '../components/Scenes/BeltAndBraces';

const SceneManager = () => {
    
    const [characters, setCharacters] = useState([])
    const [defaultCharacters, setDefaultCharacters] = useState([])
    const [items, setItems] = useState([]);
    const [defaultItems, setDefaultItems] = useState([])
    const [quests, setQuests] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)
    const [playerTargets, setPlayerTargets] = useState([new Vector3(12, 5, 15),new Vector3(12, 5, 16)])
    const [shopOpen, setShopOpen] = useState(false)
    const [questGiverOpen, setQuestGiverOpen] = useState(false)
    const [bossOpen, setBossOpen] = useState(false)
    const [characterCreationOpen, setCharacterCreationOpen] = useState(false)
    const [bookLocationOpen, setBookLocationOpen] = useState(false)
    const [dungeonComplete, setDungeonComplete] = useState(false)


    const startLevel = { name: "Street" }

    const [currentQuest, setCurrentQuest] = useState(startLevel)
    const playerMesh = useRef()

    useEffect(() => {
        getCharacters()
        getItems()
        getQuests()
    }, [])

    useEffect(() => {
        setUsableItems()
    }, [defaultItems])

    useEffect(() => {
        setUsableCharacters()
    }, [defaultCharacters])

    const getCharacters = () => {
        fetch('http://localhost:8080/characters')
            .then(res => res.json())
            .then(characterData => setDefaultCharacters(characterData))
    }

    const setUsableCharacters = () => {
        const usableCharacters = [...defaultCharacters]
        setCharacters(usableCharacters)
    }

    const getItems = () => {
        fetch('http://localhost:8080/items')
            .then(res => res.json())
            .then(items => setDefaultItems(items))
    }

    const setUsableItems = () => {
        const usableItems = [...defaultItems]
        setItems(usableItems)
    }

    const getQuests = () => {
        fetch('http://localhost:8080/quests')
            .then(res => res.json())
            .then(quests => setQuests(quests))
    }

    const updateItems = (index, newItem) => {

        // console.log("update player items - Scene Manager")
        //create new list with current player items and the passed new item

        const newItems = [...items]
        newItems[index] = newItem
        setItems(newItems)
        //we are re-rendering because we are setting state, so we need to update player position in state     
        //only update start position, target will be the same
        setPlayerTargets([playerMesh.current.position,playerTargets[1]])
    }

    const updateCharacters = (index, newCharacter) => {
        const newCharacters = [...characters]
        newCharacters[index] = newCharacter
        setCharacters(newCharacters)
    }

    const resetCharacters = () => {
        const charactersToReset = [...characters]
        charactersToReset.forEach((character) => {
                character.currency = 20
                character.healthPoints = 100
                updateCharacterInTable(character)
        })
        setCharacters(charactersToReset)
    }

    return (
        <>
             <Canvas  linear flat gl={{ antialias: false }} orthographic camera={{near:-25,far:25, zoom: 100, position: [0, 5, 0] }}>
             <SceneHelper playerMesh={playerMesh}/>

            <Suspense fallback={null}>
                <Player playerTargets={playerTargets} setPlayerTargets={setPlayerTargets} mesh={playerMesh} items={items} />
              </Suspense>

                {currentQuest.name === "ClockTowerBar" ? 
                <ClockTowerBar  playerMesh={playerMesh}
                    shopOpen={shopOpen} setShopOpen={setShopOpen} questGiverOpen={questGiverOpen}
                    setQuestGiverOpen={setQuestGiverOpen} 
                   playerTargets={playerTargets} setPlayerTargets={setPlayerTargets}
                    bookLocationOpen={bookLocationOpen} setBookLocationOpen={setBookLocationOpen}
                     /> 
                : null}

                
                {currentQuest.name === "Street" ? 

                <Street playerMesh={playerMesh} playerTargets={playerTargets} setPlayerTargets={setPlayerTargets} characters={characters} updateCharacters={updateCharacters} characterCreationOpen={characterCreationOpen} setCharacterCreationOpen={setCharacterCreationOpen} /> 

                : null}
                
                {currentQuest.name === "Rust and Dust" ? 
                <Cave playerMesh={playerMesh} bossOpen ={bossOpen} setBossOpen={setBossOpen}
                    playerTargets={playerTargets} setPlayerTargets={setPlayerTargets}
                /> 
                : null}

                {currentQuest.name === "Rock Paper Screws" ? <RockPaperScrews playerMesh={playerMesh} bossOpen ={bossOpen} setBossOpen={setBossOpen} playerTargets={playerTargets} setPlayerTargets={setPlayerTargets} /> : null}

                {currentQuest.name === "Defeat Delly Welly" ? <DefeatDellyWelly playerMesh={playerMesh} bossOpen ={bossOpen} setBossOpen={setBossOpen} playerTargets={playerTargets} setPlayerTargets={setPlayerTargets} /> : null}

                {currentQuest.name === "Belt and Braces" ? <BeltAndBraces playerMesh={playerMesh} bossOpen ={bossOpen} setBossOpen={setBossOpen} playerTargets={playerTargets} setPlayerTargets={setPlayerTargets} /> : null}

          
            </Canvas>

            {currentQuest === "Ending" ? null : <PlayerItemsGUI characters={characters} items={items} setSelectedItem={setSelectedItem} selectedItem={selectedItem}/>}

            {shopOpen === true ? <ShopListGUI updateItems={updateItems}
                characters={characters}
                setCharacters={setCharacters}
                items={items}
                setItems={setItems}
                selectedItem={selectedItem} 
                setSelectedItem={setSelectedItem}                
                /> : null}

            {questGiverOpen === true ? <QuestGUI characters={characters} quests={quests} setQuests={setQuests}
                setCurrentQuest={setCurrentQuest} setQuestGiverOpen={setQuestGiverOpen} items={items} resetCharacters={resetCharacters} setItems={setItems} defaultItems={defaultItems} /> : null}                           

            {bossOpen === true ? <BossGUI characters={characters} setCharacters={setCharacters} currentQuest={currentQuest} items={items} setItems={setItems} selectedItem={selectedItem} setCurrentQuest={setCurrentQuest} quests={quests} setBossOpen={setBossOpen} defaultItems={defaultItems} defaultCharacters={defaultCharacters} resetCharacters={resetCharacters} setDungeonComplete={setDungeonComplete} dungeonComplete={dungeonComplete} /> : null}

            {characterCreationOpen === true ? <CharacterCreationGUI characters={characters} setCharacters={setCharacters} setCurrentQuest={setCurrentQuest} updateCharacters={updateCharacters} setCharacterCreationOpen={setCharacterCreationOpen} /> : null}

            {bookLocationOpen === true ? <BookGUI setBookLocationOpen={setBookLocationOpen} /> : null}

            {currentQuest.name === "Street"?  <Rain/> : null}
          
        </>
    )
}

export default SceneManager