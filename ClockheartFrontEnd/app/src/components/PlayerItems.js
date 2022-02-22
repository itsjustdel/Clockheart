import { Html } from "@react-three/drei";
import { Suspense } from "react";
import { TextureLoader } from "three";

import { useLoader } from "@react-three/fiber"
const PlayerItems = ({items}) => {

   // const texture = useLoader(TextureLoader, ...url);  
//    const texture = useLoader(TextureLoader, ["./goldCoin.png"]);

    console.log("player items")
    console.log(items)

    const handleItemClick = () => {    
        console.log("A player item was clicked")
    }

    
    const playerItems = items.map((item, index) => {  
        if(item.character.id == 1)
        {
            return (
                <li onClick={handleItemClick} value={index} key={index}>{item.name}
                    <img className="PlayerInventoryImage" src="./goldCoin.png" alt="goldCoin" />
                </li>   
            )        
        }
    })

    return(
        <>
        <h2>Player Item List</h2>
            <ul>
                {/* <Suspense> */}
                    {playerItems}
                {/* </Suspense> */}
            </ul>
        </>
    )
}

export default PlayerItems