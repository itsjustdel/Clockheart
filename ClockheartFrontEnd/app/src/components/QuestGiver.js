import React, { Suspense, useEffect } from 'react';
import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader } from "three";

const QuestGiver = ({questGiverOpen, setQuestGiverOpen, playerMesh, setPlayerTargets}) => {
    const questGiverPosition = new Vector3(-2,5,-9);

    useEffect(() => {
        
    },[])

    useFrame( () => {
        if(playerMesh.current == undefined)
            return
        //check if the player is close to the target (boss/ loot?)
        
        const distance = playerMesh.current.position.distanceTo( questGiverPosition)
        if(distance < 1){
            //only set if we need to change (causes re-render when setting)
            if(questGiverOpen != true){
                //updatePlayerTarget(playerMesh.current.position)
                
                setPlayerTargets([playerMesh.current.position, playerMesh.current.position])
                setQuestGiverOpen(true)                
            }
        }
        
        else {        
            if(questGiverOpen!= false){
                
                //updatePlayerTarget(playerMesh.current.position)
                setPlayerTargets([playerMesh.current.position, playerMesh.current.position])//hiccup?
                
                setQuestGiverOpen(false)                
            }
        }        
    })

    function TexturedPlane({ url }) {
        const texture = useLoader(TextureLoader, ...url);   
       
       return (
         <mesh position={questGiverPosition} rotation ={[-Math.PI/2,0,0]}>
           <planeBufferGeometry attach="geometry" args={[1, 2]} />
           <meshStandardMaterial map={texture} transparent={true}/>
         </mesh>
       );
     };

    return(
        <>
            <Suspense fallback={null}>
                <TexturedPlane url={["/redguy.png"]} />       
            </Suspense>
        </>
    )
}

export default QuestGiver