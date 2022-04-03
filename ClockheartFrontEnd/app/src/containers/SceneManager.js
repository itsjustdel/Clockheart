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
import BookGUI from '../components/GUI_Files/BookGUI';
import Rain from '../components/Street/Rain';
import DefeatDellyWelly from '../components/Scenes/DefeatDellyWelly';
import BeltAndBraces from '../components/Scenes/BeltAndBraces';
import { useCharacters } from '../hooks/useCharacters';
import { useItems } from '../hooks/useItems';
import { useQuests } from '../hooks/useQuests';

const SceneManager = () => {

    const [characters, setCharacters] = useState([])
    const [defaultCharacters, setDefaultCharacters] = useState([])
    const [items, setItems] = useState([]);
    const [defaultItems, setDefaultItems] = useState([])
    const [quests, setQuests] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)
    const [playerTargets, setPlayerTargets] = useState([new Vector3(12, 5, 15), new Vector3(12, 5, 16)])
    const [shopOpen, setShopOpen] = useState(false)
    const [questGiverOpen, setQuestGiverOpen] = useState(false)
    const [bossOpen, setBossOpen] = useState(false)
    const [characterCreationOpen, setCharacterCreationOpen] = useState(false)
    const [bookLocationOpen, setBookLocationOpen] = useState(false)
    const [dungeonComplete, setDungeonComplete] = useState(false)
    const startLevel = { name: "Street" }
    const [currentQuest, setCurrentQuest] = useState(startLevel)
    const playerMesh = useRef()

    useCharacters(defaultCharacters, setDefaultCharacters, setCharacters)

    useItems(defaultItems, setDefaultItems, setItems)

    useQuests(setQuests)

    return (
        <>
            <Canvas linear flat gl={{ antialias: false }} orthographic camera={{ near: -25, far: 25, zoom: 100, position: [0, 5, 0] }}>
                <SceneHelper playerMesh={playerMesh} />

                <Suspense fallback={null}>
                    <Player playerTargets={playerTargets} setPlayerTargets={setPlayerTargets} mesh={playerMesh} items={items} />
                </Suspense>

                {currentQuest.name === "ClockTowerBar" ?
                    <ClockTowerBar playerMesh={playerMesh}
                        shopOpen={shopOpen} setShopOpen={setShopOpen} questGiverOpen={questGiverOpen}
                        setQuestGiverOpen={setQuestGiverOpen}
                        playerTargets={playerTargets} setPlayerTargets={setPlayerTargets}
                        bookLocationOpen={bookLocationOpen} setBookLocationOpen={setBookLocationOpen}
                    />
                    : null}

                {currentQuest.name === "Street" ?

                    <Street playerMesh={playerMesh} setPlayerTargets={setPlayerTargets} characterCreationOpen={characterCreationOpen} setCharacterCreationOpen={setCharacterCreationOpen} />
                    : null}

                {currentQuest.name === "Rust and Dust" ?
                    <Cave playerMesh={playerMesh} bossOpen={bossOpen} setBossOpen={setBossOpen}
                        playerTargets={playerTargets} setPlayerTargets={setPlayerTargets}
                    />
                    : null}

                {currentQuest.name === "Rock Paper Screws" ? <RockPaperScrews playerMesh={playerMesh} bossOpen={bossOpen} setBossOpen={setBossOpen} playerTargets={playerTargets} setPlayerTargets={setPlayerTargets} /> : null}

                {currentQuest.name === "Defeat Delly Welly" ? <DefeatDellyWelly playerMesh={playerMesh} bossOpen={bossOpen} setBossOpen={setBossOpen} playerTargets={playerTargets} setPlayerTargets={setPlayerTargets} /> : null}

                {currentQuest.name === "Belt and Braces" ? <BeltAndBraces playerMesh={playerMesh} bossOpen={bossOpen} setBossOpen={setBossOpen} playerTargets={playerTargets} setPlayerTargets={setPlayerTargets} /> : null}

            </Canvas>

            {currentQuest === "Ending" ? null : 
                <PlayerItemsGUI
                playerMesh={playerMesh}
                playerTargets={playerTargets}
                setPlayerTargets={setPlayerTargets}
                characters={characters}
                items={items}
                setSelectedItem={setSelectedItem}
                selectedItem={selectedItem} />}

            {shopOpen === true ? <ShopListGUI
                characters={characters}
                setCharacters={setCharacters}
                items={items}
                setItems={setItems}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem} />
                : null}

            {questGiverOpen === true ? <QuestGUI
                characters={characters}
                setCharacters={setCharacters}
                quests={quests}
                setQuests={setQuests}
                setCurrentQuest={setCurrentQuest}
                setQuestGiverOpen={setQuestGiverOpen}
                items={items}
                setItems={setItems}
                defaultItems={defaultItems} />
                : null}

            {bossOpen === true ? <BossGUI characters={characters}
                setCharacters={setCharacters}
                currentQuest={currentQuest}
                items={items} setItems={setItems}
                selectedItem={selectedItem}
                setCurrentQuest={setCurrentQuest}
                quests={quests}
                setBossOpen={setBossOpen}
                defaultItems={defaultItems}
                defaultCharacters={defaultCharacters}
                setDungeonComplete={setDungeonComplete}
                dungeonComplete={dungeonComplete} />
                : null}

            {characterCreationOpen === true ? <CharacterCreationGUI
                characters={characters}
                setCharacters={setCharacters}
                setCurrentQuest={setCurrentQuest}
                setCharacterCreationOpen={setCharacterCreationOpen} />
                : null}

            {bookLocationOpen === true ? <BookGUI
                setBookLocationOpen={setBookLocationOpen} />
                : null}

            {currentQuest.name === "Street" ? <Rain /> : null}

        </>
    )
}

export default SceneManager