import GroundPlane from './GroundPlane'
import React, { useEffect, useState } from 'react'
const Cave = ({updatePlayerTarget}) => {

    console.log("Test level")
   // const [openForm, setOpenForm] = useState(false)

    useEffect( () => 
    {

    }, [])
    
    return(
        <>
            <GroundPlane updatePlayerTarget={updatePlayerTarget} colour={"brown"} />
        </>
    )
}

export default Cave;