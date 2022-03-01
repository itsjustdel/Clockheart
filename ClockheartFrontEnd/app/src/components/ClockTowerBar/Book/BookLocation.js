import React, { Suspense, useEffect } from 'react';
import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader } from "three";


const BookLocation = ({bookLocationOpen, setBookLocationOpen, playerMesh, setPlayerTargets}) => {
    const bookLocationPosition = new Vector3(-6.3, 4.8, -8.2);


    useEffect(() => {
        
    },[])

    useFrame( () => {
        if(playerMesh.current == undefined)
            return
        //check if the player is close to the target (boss/ loot?)
        
        const distance = playerMesh.current.position.distanceTo( bookLocationPosition)
        if(distance < 2){
            //only set if we need to change (causes re-render when setting)
            if(bookLocationOpen != true){
                // updatePlayerTarget(playerMesh.current.position)
                setPlayerTargets([playerMesh.current.position, playerMesh.current.position])
                setBookLocationOpen(true)                
            }
        }
        
        else {        
            if(bookLocationOpen!= false){
                // updatePlayerTarget(playerMesh.current.position)
                setPlayerTargets([playerMesh.current.position, playerMesh.current.position])
                setBookLocationOpen(false)                
            }
        }        
    })

    function TexturedPlane({ url }) {
        const texture = useLoader(TextureLoader, ...url);   
       
       return (
         <mesh position={bookLocationPosition} rotation ={[-Math.PI/2,0,0]}>
           <planeBufferGeometry attach="geometry" args={[1, 1]} />
           <meshStandardMaterial map={texture} transparent={true}/>
         </mesh>
       );
     };

    return(
        <>
            <Suspense fallback={null}>
                <TexturedPlane url={["/newPngs/book.png"]} />       
            </Suspense>
        </>
    )
}

export default BookLocation