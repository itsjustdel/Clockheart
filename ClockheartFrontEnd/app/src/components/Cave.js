import GroundPlane from './GroundPlane'
import React, { useEffect, useState } from 'react'
import Boss from './Boss'
const Cave = ({playerMesh, updatePlayerTarget, bossOpen, setBossOpen}) => {

    useEffect( () => 
    {

    }, [])
    
    return(
        <>
            <GroundPlane updatePlayerTarget={updatePlayerTarget} colour={"brown"} />

            <Boss playerMesh={playerMesh} bossOpen={bossOpen} setBossOpen={setBossOpen} updatePlayerTarget={updatePlayerTarget}/>
        </>
    )
}

export default Cave;