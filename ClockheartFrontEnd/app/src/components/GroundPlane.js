
import { Vector3 } from 'three';

//creates a plane with an onClick method to set position for player movement
const GroundPlane = ({updatePlayerTarget, colour}) => {

    const handleClick = (event) => {
        //get mouse co-ords from mouse event (relative to mesh clicked)
        const x = event.point.x;
        const y = 1;//to be fixed
        const z = event.point.z;
        
        //always define 3d positions as "Vector3", it will allow us to compare, subtract etc easily
         const _playerTarget = new Vector3(x,y,z); //doesn't cause re-render
         updatePlayerTarget(_playerTarget);
    }

   
    return (
        <>
            <mesh position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]} 
            
            onClick={handleClick}>


                <planeBufferGeometry args={[50, 50]} />
                <meshStandardMaterial transparent={true} opacity={0} />
            </mesh>

            
        </>
    )
}

export default GroundPlane;