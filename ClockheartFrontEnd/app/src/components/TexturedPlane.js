import { useFrame, useLoader} from "@react-three/fiber"
import { Vector3, TextureLoader } from "three";
import { Html } from "@react-three/drei"

const TexturedPlane =({name, url, position, args, speech, playerMesh})=>{


    useFrame( () => {

        console.log(playerMesh);
        if(playerMesh == undefined && playerMesh.current == undefined)
            return
        //check if the player is close to the target (boss/ loot?)
        
        const distance = playerMesh.current.position.distanceTo(position)
        if(distance < 2){
           console.log(speech);
        }
        
        else {        
            
        }        
    })

    function TexturedPlane() {
        const texture = useLoader(TextureLoader, ...url);

        return (
            <mesh name={name} position={position} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={args} />
                <meshStandardMaterial map={texture} transparent={true} />
                <Html>
                    <div className="label"><p>{speech}</p></div>
                </Html>
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