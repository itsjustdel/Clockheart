import GroundPlane from '../components/GroundPlane'
import { Html } from '@react-three/drei'
import { useFrame} from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { Vector3 } from 'three'
import ShopList from './ShopList'

const TestLevel = ({updatePlayerTarget, playerMesh, updateItems, updateCharacters, characters, items}) => {

    console.log("Test level")
    const [openForm, setOpenForm] = useState(false)

    useEffect( () => 
    {
        console.log("use effect test level")
        // getShopItems()
    }, [])

    useFrame( () => {
        if(playerMesh.current == undefined)
            return
        //check if the player is close to the target (boss/ loot?)
        const target = new Vector3(0,1,0)
        const distance = playerMesh.current.position.distanceTo( target)
        if(distance < 1)
            setOpenForm(true)
        else 
            setOpenForm(false)
    })


    
    return(
        <>
            <GroundPlane updatePlayerTarget={updatePlayerTarget} />
                {openForm == true ? 
                <Html center className="listContainer" position={[0,4,0]}>
                    
                    <ShopList updateItems={updateItems} characters={characters} updateCharacters={updateCharacters} 
                    items={items}/>
                        
                    

                </Html> : null}
        </>
    )

}

export default TestLevel;