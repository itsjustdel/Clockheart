import React, { Suspense, useState } from 'react';
import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader } from "three";

const Boss = ({playerMesh, bossOpen, setBossOpen, updatePlayerTarget}) => {
    
    const bossPosition = new Vector3(0,5,0);

    useFrame( () => {
        if(playerMesh.current == undefined)
            return
        //check if the player is close to the target (boss/ loot?)
        
        const distance = playerMesh.current.position.distanceTo( bossPosition)
        
        if(distance < 1){
            if(!bossOpen){
                updatePlayerTarget(playerMesh.current.position)
                setBossOpen(true)
            }
                
        }        
        else {        
            if(bossOpen)
            {
                updatePlayerTarget(playerMesh.current.position)
                setBossOpen(false)
            }
           
        }        
    })

    function TexturedPlane({ url }) {
        const texture = useLoader(TextureLoader, ...url);   

       return (
         <mesh position={bossPosition} rotation ={[-Math.PI/2,0,0]}>
           <planeBufferGeometry attach="geometry" args={[1, 2]} />
           <meshStandardMaterial map={texture} transparent={true}/>
         </mesh>
       );
     };

     return (
        <>
             <Suspense fallback={null}>
                <TexturedPlane url={["/redguy.png"]} />       
            </Suspense>


        </>
    )
}

export default Boss