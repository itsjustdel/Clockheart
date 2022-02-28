
import { Vector3 } from 'three';

//creates a plane with an onClick method to set position for player movement
const GroundPlane = ({size, playerMesh, setPlayerTargets, colour}) => {

    const handleClick = (event) => {
        //get mouse co-ords from mouse event (relative to mesh clicked)
        const x = event.point.x;
        const y = 1;//to be fixed
        const z = event.point.z;
        
        //always define 3d positions as "Vector3", it will allow us to compare, subtract etc easily
         const _playerTarget = new Vector3(x,y,z); //doesn't cause re-render
        //  updatePlayerTarget(_playerTarget);
         setPlayerTargets([playerMesh.current.position, _playerTarget])

    }

   
    return (
        <>
            <mesh name="GroundPlane" position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]} 
            
            onClick={handleClick}>


                <planeBufferGeometry args={size} />
                {/* <meshStandardMaterial transparent={true} opacity={0} /> */}
                <meshStandardMaterial color={colour} />
            </mesh>

            
        </>
    )
}

export default GroundPlane;