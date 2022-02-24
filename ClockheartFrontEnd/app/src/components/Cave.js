import GroundPlane from './GroundPlane'
import React, { useEffect, useState } from 'react'
import Boss from './Boss'
import Music from './Music'
const Cave = ({playerMesh, updatePlayerTarget, bossOpen, setBossOpen}) => {

    useEffect( () => 
    {

    }, [])


    
    return(
        <>
            <GroundPlane updatePlayerTarget={updatePlayerTarget} colour={"brown"} />

            <Boss playerMesh={playerMesh} bossOpen={bossOpen} setBossOpen={setBossOpen} updatePlayerTarget={updatePlayerTarget}/>

            <Music url={"/CaveAmbience.mp3"} soundLevel={0.1} />
        </>
    )
}

export default Cave;