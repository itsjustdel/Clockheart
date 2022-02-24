import GroundPlane from './GroundPlane'
import React, { useEffect, useState } from 'react'

import Shop from './Shop'
import QuestGiver from './QuestGiver'
const ClockTowerBar= ({updatePlayerTarget, playerMesh, shopOpen, setShopOpen, questGiverOpen,setQuestGiverOpen}) => {

    console.log("Test level")
   // const [openForm, setOpenForm] = useState(false)

    useEffect( () => 
    {

    }, [])

  
    
    return(
        <>
            <GroundPlane updatePlayerTarget={updatePlayerTarget} colour={"grey"}/>

            <Shop shopOpen={shopOpen} setShopOpen={setShopOpen} playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget}/>
            <QuestGiver questGiverOpen={questGiverOpen} setQuestGiverOpen={setQuestGiverOpen} playerMesh={playerMesh} updatePlayerTarget={updatePlayerTarget}/>

                {/* {openForm == true ? 
                <Html center className="listContainer" position={[0,4,0]}>                    
                    <ShopList updateItems={updateItems} characters={characters} updateCharacters={updateCharacters} 
                    items={items}/>
                </Html> : null} */}
        </>
    )

}

export default ClockTowerBar;