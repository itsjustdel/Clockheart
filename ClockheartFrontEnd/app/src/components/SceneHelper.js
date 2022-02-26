import { OrbitControls } from "@react-three/drei"

//a class to store camers, lights etc

const SceneHelper = () => {

    return (<>
        <OrbitControls />
        {/* <gridHelper /> */}
        <ambientLight />
    </>)

}
export default SceneHelper;