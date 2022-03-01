import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader, ClampToEdgeWrapping } from "three";
import React, { useEffect, useRef, useState } from 'react';
const TexturedPlane = ({ name, url, position, args, avoid, playerMesh, setPersonPos, personPos }) => {

    const meshRef = useRef()

    // const [lastPos, setLastPos] = useState(new Vector3(position[0],position[1],[position[2]]))
    const [target, setTarget] = useState(new Vector3())
    const startSet = useRef()

    useEffect(() => {

        // if(personPos.x != 0){
        //     console.log("fx")
            // meshRef.current.position.x = personPos.x
            // meshRef.current.position.y = personPos.y
            // meshRef.current.position.z = personPos.z
        // }
    })

    useFrame(() => {

        if (meshRef.current == undefined)
            return

        // if(startSet.current)
        // {
        //     meshRef.current.position.x = lastPos.x
        //     meshRef.current.position.y = lastPos.y
        //     meshRef.current.position.z = lastPos.z          
        //     startSet.current = false
        // }
        if (personPos != meshRef.current.position) {


        }


        if (avoid) {
            if (playerMesh.current != undefined) {

                const p = meshRef.current.position// new Vector3(position[0], position[1], position[2])
                const d = p.distanceTo(playerMesh.current.position)
                if (d < 1) {

                    let dir = new Vector3()
                    dir.subVectors(p, playerMesh.current.position)
                    setTarget(dir)
                }

                //initial position distance check
                if (meshRef.current.position.distanceTo(new Vector3(position[0], position[1], position[2])) < 3) {
                    meshRef.current.position.x += target.x / 10
                    meshRef.current.position.y += 0
                    meshRef.current.position.z += target.z / 10

                    setPersonPos(meshRef.current.position)
                }
            }
        }
    })



    function TexturedPlane() {
        const texture = useLoader(TextureLoader, ...url);
        console.log(position)

        return (
            <mesh ref={meshRef} name={name} position={position} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={args} />
                <meshStandardMaterial map={texture} transparent={true} />
            </mesh>
        );
    };

    return (
        <>
            <TexturedPlane />
        </>
    )
}

export default TexturedPlane
