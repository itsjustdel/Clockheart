import { useFrame, useLoader } from "@react-three/fiber"
import { Suspense, useState } from "react";
import { Vector3, TextureLoader } from "three";
import GroundPlane from "./GroundPlane"
import Music from "./Music";
import TexturedPlane from "./TexturedPlane";

const Street = ({updatePlayerTarget, characterCreationOpen, setCharacterCreationOpen, playerMesh, setPlayerStartPosition, setPlayerTargetPosition}) => {
    
    const [playerPositionOnLoad, setPlayerPositionOnLoad] = useState(false)


    const doorPosition = new Vector3(-17, 5, -13);
    const size = 30;
    const sizeX = 1712/size
    const sizeY = 1310/size



    useFrame( () => {
        if(playerMesh.current == undefined)
            return
        //check if the player is close to the target (boss/ loot?)
        if(!playerPositionOnLoad){
            const startPos = new Vector3(12, 5, 15)
            
            setPlayerStartPosition(startPos)
            setPlayerTargetPosition(startPos)

            //only do once
            setPlayerPositionOnLoad(true);            
        }
        const distance = playerMesh.current.position.distanceTo( doorPosition)
        
        if(distance < 2){
            if(!characterCreationOpen){
                updatePlayerTarget(playerMesh.current.position)
                setCharacterCreationOpen(true)
            }
                
        }        
        else {        
            if(characterCreationOpen)
            {
                updatePlayerTarget(playerMesh.current.position)
                setCharacterCreationOpen(false)
            }
           
        }        
    })


    const Obstacles = () => {
                
        return(
        <>
              <mesh name="Collision" position={[21, 3, 9]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[14,10]}  />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[8.9, 3, 8]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[14,10]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[10, 3, 13]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[7,4]}  />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[0, 3, 9]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[4,4]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[-5, 3, 0]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[12,26]}  />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[-24, 3, 8]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[10,28]} />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
            <mesh name="Collision" position={[-26, 3, -7]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[7,5]}  />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>

            <mesh name="Collision" position={[-17, 3, -18]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={[18,13]}  />
                <meshStandardMaterial transparent={true} opacity={0}/>
            </mesh>
        </>
        )
    }

    
    return(
        <>
             <Suspense fallback={null}>
                <GroundPlane updatePlayerTarget={updatePlayerTarget} colour={"aquamarine"} size={[sizeX, sizeY]} />
                <TexturedPlane url={["/levels/streetMain.png"]}position={[0,2,0]} args={[sizeX,sizeY]}/>
                <TexturedPlane url={["/levels/streetOverlap.png"]}position={[0,7,0]} args={[sizeX, sizeY]}/>

                <Obstacles/>


            {/* <Music url={"/ClockworkTheme.mp3"} soundLevel={0.05}/>
            <Music url={"/CrowdAmbience.mp3"} soundLevel={0.03}/> */}
            </Suspense>
        </>
    )
}

export default Street