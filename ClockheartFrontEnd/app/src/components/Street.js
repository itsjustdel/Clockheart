import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader } from "three";
import GroundPlane from "./GroundPlane"

const Street = ({updatePlayerTarget, characterCreationOpen, setCharacterCreationOpen, playerMesh}) => {
    

    const doorPosition = new Vector3(0,1,4);

    useFrame( () => {
        if(playerMesh.current == undefined)
            return
        //check if the player is close to the target (boss/ loot?)
        
        const distance = playerMesh.current.position.distanceTo( doorPosition)
        
        if(distance < 1){
            if(!characterCreationOpen){
                updatePlayerTarget(playerMesh.current.position)
                setCharacterCreationOpen(true)
            }
                
        }        
        else {        
            if(characterCreationOpen)
            {
                updatePlayerTarget(playerMesh.current.position)
                setCharacterCreationOpen(false)
            }
           
        }        
    })

    return(
        <>
            <GroundPlane updatePlayerTarget={updatePlayerTarget} colour={"aquamarine"} />
        </>
    )
}

export default Street