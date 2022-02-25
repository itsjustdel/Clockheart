import GroundPlane from './GroundPlane'
import React, { Suspense, useEffect, useState } from 'react'

import Shop from './Shop'
import QuestGiver from './QuestGiver'
import ClockTowerBarTex from './ClockTowerBarTex'
const ClockTowerBar= ({updatePlayerTarget, playerMesh, shopOpen, setShopOpen, questGiverOpen,setQuestGiverOpen}) => {

    useEffect( () => 
    {

    }, [])
    
    return(
        <>
            <GroundPlane updatePlayerTarget={updatePlayerTarget} colour={"grey"}/>
        {/* <Suspense> */}
                <ClockTowerBarTex/>
                {/* </Suspense> */}

            <Shop shopOpen={shopOpen} setShopOpen={setShopOpen} playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget}/>

            <QuestGiver questGiverOpen={questGiverOpen} setQuestGiverOpen={setQuestGiverOpen} playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget}/>

            {/* <Music url={"/SteampunkAmbience.mp3"} /> */}
            
        </>
    )
}

export default ClockTowerBar;