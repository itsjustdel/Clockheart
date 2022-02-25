import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { CycleRaycast, useCursor } from '@react-three/drei'

const RaycastTest = ({setRaycastObjects}) => {
  console.log("raycaster")


        return ( 
             <>
             <CycleRaycast onChanged = {(objects, cycle) => {

               
                    setRaycastObjects({ objects, cycle })} 
                
                }
                 />

             {/* <CycleRaycast
                preventDefault={true} // Call event.preventDefault() (default: true)
                scroll={true} // Wheel events (default: true)
                keyCode={9} // Keyboard events (default: 9 [Tab])
                onChanged={(objects, cycle) => console.log(objects, cycle)} // Optional onChanged event
                />               */}
            </>
        )
}



export default RaycastTest