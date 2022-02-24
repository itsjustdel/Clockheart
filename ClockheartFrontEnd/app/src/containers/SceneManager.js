//libraries, frameworks
import { Vector3 } from 'three';
import React, { useState, useRef, useEffect } from 'react';
import { Canvas} from "@react-three/fiber"
//project defined
import Player from "../components/Player";
import SceneHelper from '../components/SceneHelper';
import ClockTowerBar from '../components/ClockTowerBar';
import Shop from '../components/Shop';
import ShopList from '../components/ShopList'
import PlayerItems from '../components/PlayerItems';
import QuestList from '../components/QuestList';

const SceneManager = () => {

    console.log("Scene manager Loaded")

    const [characters, setCharacters] = useState([])
    const [items, setItems] = useState([]);
    const [quests, setQuests] = useState([]);

    const [playerStartPosition, setPlayerStartPosition] = useState(new Vector3(-4, 1, 4))
    const [playerTargetPosition, setPlayerTargetPosition] = useState(new Vector3(-4, 1, 4))    
    
    const [shopOpen, setShopOpen] = useState(false)
    const [questGiverOpen, setQuestGiverOpen] = useState(false)    
    const [currentQuest, setCurrentQuest] = useState("")

    const playerMesh = useRef()

    useEffect( () => {
        getCharacters()
        getItems()
        getQuests()
    },[])

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

        console.log("update player items - Scene Manager")
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
            <Canvas orthographic camera={{ zoom: 30, position: [0, 5, 0] }}>
                <SceneHelper />

                <ClockTowerBar updatePlayerTarget={updatePlayerTarget} playerMesh={playerMesh} 
                   shopOpen={shopOpen} setShopOpen={setShopOpen} questGiverOpen={questGiverOpen} 
                   setQuestGiverOpen={setQuestGiverOpen}
                    setPlayerStartPosition={setPlayerStartPosition}
                />  

                <Player playerStartPosition={playerStartPosition} playerTargetPosition={playerTargetPosition} mesh={playerMesh} items={items} />        
                
            </Canvas>

            <PlayerItems items={items}/>
            
            {shopOpen == true ?  <ShopList updateItems={updateItems} 
                                        characters={characters} 
                                        updateCharacters={updateCharacters}
                                        items={items} /> : null }

            {questGiverOpen == true ? <QuestList characters={characters} quests={quests} setQuests={setQuests}
                                                setCurrentQuest={setCurrentQuest}
                                        /> : null}
                                        

            {/* <ul classNameName='playerItemList'>
                <li >
                        <div classNameName='playerItem'>

                        </div>
                </li>
                        <li classNameName='playerItem'>
                
                        </li>
                <li classNameName='playerItem'>
                        
                </li>
            </ul> */}

            <div id="push-group-element">
            <ul className="mosaic-container">
                <li className="mosaic-item item-small" >1</li>
                <li className="mosaic-item item-small" >2</li>
                <li className="mosaic-item item-small" >3</li>
                <li className="mosaic-item item-big" >4</li>
                {/* <span style={{"width: 33.3%;"}}> */}
                <li className="mosaic-item item-small" >5</li>
                <li className="mosaic-item item-small" >6</li>
                {/* </span> */}
                <li className="mosaic-item item-small" >7</li>
                <li className="mosaic-item item-small" >8</li>
                <li className="mosaic-item item-small" >9</li>
            </ul>
            </div>
        </>

        
    )
}

export default SceneManager;


