import GroundPlane from './GroundPlane'
import React, { useEffect, useState, Suspense } from 'react'
import Boss from './Boss'
import Music from './Music'
import TexturedPlane from './TexturedPlane'
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber'

const Cave = ({ playerMesh, bossOpen, setBossOpen, setPlayerTargets }) => {
    
    const [playerPositionOnLoad, setPlayerPositionOnLoad] = useState(false)

    const size = 15;
    const sizeX = 256/size
    const sizeY = 256/size

    useEffect(() => {

    }, [])

    useFrame( () => 
    {
        //set player position on scene load
        if(playerMesh.current == undefined)
            return

        if(!playerPositionOnLoad){
            const startPos = new Vector3(0,5,-6)
            
            // setPlayerStartPosition(startPos)
            // setPlayerTargetPosition(startPos)
            setPlayerTargets([startPos,startPos])

            //only do once
            setPlayerPositionOnLoad(true);            
        }

    }, [])

    return (
        <>
            <Suspense fallback={null}>
                <GroundPlane setPlayerTargets={setPlayerTargets} colour={"brown"} size={[sizeX, sizeY]}/>
                <TexturedPlane url={["/levels/caveLevel.png"]} position={[0, 2, 0]} args={[sizeX, sizeY]} />

                <Boss playerMesh={playerMesh} bossOpen={bossOpen} setBossOpen={setBossOpen} setPlayerTargets={setPlayerTargets} />

                {/* <Music url={"/CaveAmbience.mp3"} soundLevel={0.1} /> */}
            </Suspense>
        </>
    )
}

export default Cave;