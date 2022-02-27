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
              <mesh name="Collision" position={[-8.4,3,-2.25]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[5,3]} />
                <meshStandardMaterial transparent={true} opacity={0} />
            </mesh>
            <mesh name="Collision" position={[6, 3,-2.25]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[21.5,3]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[-5.9, 3,8]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[10,14]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>

            <mesh name="Collision" position={[-12, 3,0]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[2,10]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[-11, 3,-9]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[2,10]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[-11, 3,-9]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[2,10]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[-5, 3,-14.5]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[10,2]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[.5, 3,-10]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[2,10]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[14, 3, 8]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[10,14]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[1.6, 3, 6]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[2,2]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[1.6, 3, 9]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[2,2]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[1.6, 3, 12]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[2,2]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>

            <mesh name="Collision" position={[7, 3, 1]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[6,5]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
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
            <TexturedPlane url={["/levels/barBar.png"]}position={[0,3,0]} args={[sizeX,sizeY]}/>
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