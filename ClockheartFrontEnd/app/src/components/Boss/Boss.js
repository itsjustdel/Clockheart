import React, { Suspense, useState } from 'react';
import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader } from "three";

const Boss = ({playerMesh, bossOpen, setBossOpen, setPlayerTargets}) => {
    
    const bossPosition = new Vector3(3.8,5.2,2.4);

    useFrame( () => {
        if(playerMesh.current == undefined)
            return
        //check if the player is close to the target (boss/ loot?)
        
        const distance = playerMesh.current.position.distanceTo( bossPosition)
        
        if(distance < 5){
            if(!bossOpen){
                // updatePlayerTarget(playerMesh.current.position)
                setPlayerTargets([playerMesh.current.position, playerMesh.current.position])
                setBossOpen(true)
            }
                
        }        
        else {        
            if(bossOpen)
            {
                // updatePlayerTarget(playerMesh.current.position)
                setPlayerTargets([playerMesh.current.position, playerMesh.current.position])
                setBossOpen(false)
            }
           
        }        
    })

    function TexturedPlane({ url }) {
        const texture = useLoader(TextureLoader, ...url);   

       return (
         <mesh position={bossPosition} rotation ={[-Math.PI/2,0,0]}>
           <planeBufferGeometry attach="geometry" args={[10, 6]} />
           <meshStandardMaterial map={texture} transparent={true}/>
         </mesh>
       );
     };

     return (
        <>
             <Suspense fallback={null}>
                <TexturedPlane url={["/people/bosspic.png"]} />       
            </Suspense>
        </>
    )
}

export default Boss