import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

//a class to store camers, lights etc

const SceneHelper = ({playerMesh}) => {

    useFrame((state) => {

        if(playerMesh.current == undefined)
            return

        // console.log(state.camera.position)

        const newPos = new Vector3( playerMesh.current.position.x,playerMesh.current.position.y, playerMesh.current.position.z)
        newPos.add(new Vector3(0,5,0))
        // console.log(newPos)
         state.camera.position.set( newPos.x, newPos.y, newPos.z)

        
    })

    return (<>
        {/* <OrbitControls /> */}
        {/* <gridHelper /> */}
        <ambientLight />
    </>)

}
export default SceneHelper;