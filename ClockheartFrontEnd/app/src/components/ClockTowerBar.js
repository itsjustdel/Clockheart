import GroundPlane from './GroundPlane'
import React, { Suspense, useEffect, useState } from 'react'
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three";
import Shop from './Shop'
import QuestGiver from './QuestGiver'
const ClockTowerBar= ({updatePlayerTarget, playerMesh, shopOpen, setShopOpen, questGiverOpen,setQuestGiverOpen}) => {

    useEffect( () => 
    {

    }, [])

    function TexturedPlane({ url , args, position, name }) {
        const texture = useLoader(TextureLoader, ...url);

        return (
            <mesh name={name} position={position} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={args} />
                <meshStandardMaterial map={texture} transparent={true} />
            </mesh>
        );
    };

    const Obstacles = () => {
        //transparent={true}
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
         <Obstacles/>
            <GroundPlane updatePlayerTarget={updatePlayerTarget} colour={"grey"}/>
           

            <Shop shopOpen={shopOpen} setShopOpen={setShopOpen} playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget}/>

            <QuestGiver questGiverOpen={questGiverOpen} setQuestGiverOpen={setQuestGiverOpen} playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget}/>

            <Suspense fallback={null}>
              
            <TexturedPlane name="mainFloor" url={["/textures/bar/png/0000-Level_0--03-Tiles_decoration.png"]}position={[0,1,0]} args={[40, 40]}/>
            <TexturedPlane url={["/textures/bar/png/0000-Level_0--01-Furniture.png"]}position={[0,2,0]} args={[40, 40]}/>
            <TexturedPlane url={["/textures/bar/png/0000-Level_0--00-Tables_and_Chairs.png"]}position={[0,3,0]} args={[40, 40]}/>
            
            </Suspense>

            {/* <Music url={"/SteampunkAmbience.mp3"} /> */}
            
        </>
    )
}

export default ClockTowerBar;