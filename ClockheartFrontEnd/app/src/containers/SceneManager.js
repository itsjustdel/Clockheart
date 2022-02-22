//libraries, frameworks
import { Vector3 } from 'three';
import React, { useState, useRef } from 'react';
import { Canvas} from "@react-three/fiber"
//project defined
import Player from "../components/Player";
import SceneHelper from '../components/SceneHelper';
import TestLevel from '../components/TestLevel';

const SceneManager = () => {

    console.log("Scene manager Loaded")


    const [playerItems, setPlayerItems] = useState([])   
    //to move the player, we need to know where to start from
    const [playerStartPosition, setPlayerStartPosition] = useState(new Vector3(-4, 1, 4))
    //and where we want to go
    const [playerTargetPosition, setPlayerTargetPosition] = useState(new Vector3(-4, 1, 4))
    //we move the mesh, we can keep a reference of the mesh for when we need to check it's position
    //useRef is like an instance variable but gets forgotten on "re-render" (when we change something in state)
    const playerMesh = useRef()

    const updatePlayerTarget = (newPlayerTargetPosition) => {

        setPlayerStartPosition(playerMesh.current.position) //combine with state below to reduce renders
        setPlayerTargetPosition(newPlayerTargetPosition)
    }
    const updatePlayerItems = (newItem) => {

        console.log("update player items - Scene Manager")
        //create new list with current player items and the passed new item
        const newItems = [...playerItems, newItem]
        setPlayerItems(newItems)
        //we are re-rendering because we are setting state, so we need ot update player position in state
        setPlayerStartPosition(playerMesh.current.position)

         
    }

    return (
        <>
            <Canvas orthographic camera={{ zoom: 30, position: [0, 5, 0] }}>
                <SceneHelper />

                <TestLevel updatePlayerTarget={updatePlayerTarget} 
                playerMesh={playerMesh} updatePlayerItems={updatePlayerItems} />  

                <Player playerStartPosition={playerStartPosition} playerTargetPosition={playerTargetPosition} mesh={playerMesh} playerItems={playerItems} />            
                
            </Canvas>
        </>
    )
}

export default SceneManager;


