import { useFrame, useLoader} from "@react-three/fiber"
import { Vector3, TextureLoader } from "three";
import { Html } from "@react-three/drei"
import { useState } from "react";
import './/TexturedPlane.css'



const TexturedPlane =({name, url, position, args, speech, playerMesh})=>{

    const [close, setClose] = useState(false)

    useFrame( () => {

        
        if(playerMesh == undefined)
            return

        if(playerMesh.current == undefined)
            return

        
        //check if the player is close to the target (boss/ loot?)
        //needs to be cast to a vector3 so the vector class can do its magic    
        //do not compare y level/ layer - make same as player mesh level    
        const positionV3 = new Vector3(position[0], 0, position[2])
        const posPlayer = new Vector3(playerMesh.current.position.x, 0 , playerMesh.current.position.z)
        const distance = positionV3.distanceTo(posPlayer)
        
        if(distance < 5){
        
           setClose(true)
        }
        
        else {        
            setClose(false)
        }        
    })

    function TexturedPlane() {
        const texture = useLoader(TextureLoader, ...url);

        return (
            <mesh name={name} position={position} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={args} />
                <meshStandardMaterial map={texture} transparent={true} />
                {close? 
                <Html className="people" >
                    <div className="label">{speech}</div>
                </Html> 
                : null }
    
            </mesh>
        );
    };

    return(
        <>
            <TexturedPlane/>
        </>
    )
}

export default TexturedPlane