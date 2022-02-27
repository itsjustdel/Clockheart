import React, { Suspense, useEffect } from 'react';
import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader } from "three";

const Shop = ({shopOpen, setShopOpen, playerMesh, updatePlayerTarget}) => {

    const shopPosition = new Vector3(9.5,3.5,1.5);

    useEffect(() => {
        
    },[])

    useFrame( () => {
        if(playerMesh.current == undefined)
            return
        //check if the player is close to the target (boss/ loot?)
        
        const distance = playerMesh.current.position.distanceTo( shopPosition)
        if(distance < 3){
            //only set if we need to change (causes re-render when setting)
            if(shopOpen != true){
                updatePlayerTarget(playerMesh.current.position)
                setShopOpen(true)                
            }
        }
        
        else {        
            if(shopOpen!= false){
                updatePlayerTarget(playerMesh.current.position)
                setShopOpen(false)                
            }
        }        
    })

    function TexturedPlane({ url }) {
        const texture = useLoader(TextureLoader, ...url);   
       
       return (
         <mesh position={shopPosition} rotation ={[-Math.PI/2,0,0]}>
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

export default Shop