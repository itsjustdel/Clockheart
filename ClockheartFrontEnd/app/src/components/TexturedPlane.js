import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader } from "three";

const TexturedPlane =({name, url, position, args})=>{


    function TexturedPlane() {
        const texture = useLoader(TextureLoader, ...url);

        return (
            <mesh name={name} position={position} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={args} />
                <meshStandardMaterial map={texture} transparent={true} />
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