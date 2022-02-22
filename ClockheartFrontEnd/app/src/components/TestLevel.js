import GroundPlane from '../components/GroundPlane'
import { Html } from '@react-three/drei'
import { useFrame} from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { Vector3 } from 'three'
import ShopList from './ShopList'

const TestLevel = ({updatePlayerTarget, playerMesh, updatePlayerItems}) => {

    const [openForm, setOpenForm] = useState(false)
    const [shopItems, setShopItems] = useState(null);

    useEffect( () => 
    {
        console.log("use effect test level")
        getShopItems()
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

    const getShopItems = function(){        
        fetch('/items?characterId=2')
        .then(res => res.json())
        .then(shop => setShopItems(shop))
    }
    
    return(
        <>
            <GroundPlane updatePlayerTarget={updatePlayerTarget} />
                {openForm == true ? 
                <Html center className="listContainer" position={[0,4,0]}>
                    
                    <ShopList shopItems={shopItems} updatePlayerItems={updatePlayerItems}/>
                        
                    <button>I'm a button</button>
                </Html> : null}
        </>
    )

}

export default TestLevel;