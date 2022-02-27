import GroundPlane from './GroundPlane'
import React, { useEffect, useState, Suspense } from 'react'

import Music from './Music'
import Shop from './Shop'
import QuestGiver from './QuestGiver'
import BookLocation from './BookLocation'
import TexturedPlane from './TexturedPlane'
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber'
const ClockTowerBar= ({updatePlayerTarget,setPlayerStartPosition, setPlayerTargetPosition, playerMesh, shopOpen, setShopOpen, questGiverOpen, setQuestGiverOpen, bookLocationOpen, setBookLocationOpen}) => {


    const [playerPositionOnLoad, setPlayerPositionOnLoad] = useState(false)

    const size = 30;
    const sizeX = 1024/size
    const sizeY = 862/size

    useFrame( () => 
    {
        //set player position on scene load
        if(playerMesh.current == undefined)
            return

        if(!playerPositionOnLoad){
            const startPos = new Vector3(7,5,13)
            
            setPlayerStartPosition(startPos)
            setPlayerTargetPosition(startPos)

            //only do once
            setPlayerPositionOnLoad(true);            
        }


    }, [])
    
    const Obstacles = () => {
        return(
        <>
              <mesh name="Collision" position={[4,3,0]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[3,3]} />
                <meshStandardMaterial/>
            </mesh>
        </>
        )
    }
    
    return(
        <>
        <Suspense fallback={null}>
            <Obstacles/>
            
            <GroundPlane updatePlayerTarget={updatePlayerTarget} colour={"grey"} size={[sizeX, sizeY]}/>

            <TexturedPlane url={["/levels/barMain.png"]}position={[0,2,0]} args={[sizeX,sizeY]}/>
            <TexturedPlane url={["/levels/barBar.png"]}position={[0,6,0]} args={[sizeX,sizeY]}/>
            <TexturedPlane url={["/levels/barOverlap.png"]}position={[0,6,0]} args={[sizeX,sizeY]}/>

            <Shop shopOpen={shopOpen} setShopOpen={setShopOpen} playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget}/>

            <QuestGiver questGiverOpen={questGiverOpen} setQuestGiverOpen={setQuestGiverOpen} playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget}/>

            <BookLocation bookLocationOpen={bookLocationOpen} setBookLocationOpen={setBookLocationOpen} playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget}/>

            <Music url={"/SteampunkAmbience.mp3"} soundLevel={0.03}/>

        </Suspense>
            
        </>
    )
}

export default ClockTowerBar;