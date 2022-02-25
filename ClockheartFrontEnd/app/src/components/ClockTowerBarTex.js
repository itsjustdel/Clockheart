import React, { Suspense } from 'react';
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three";


const ClockTowerBarTex = () => {

    const Grid = ({url}) => {
        const scale = 1;
        const size = 20;
        const grid = [];
        for (let i = -size / 2; i < size / 2; i+=scale) {
            for (let j = -size / 2; j < size / 2; j+=scale) {
                grid.push([i, 0, j]); // -5 to match gridhelper
            }
        }
        const texture = useLoader(TextureLoader,...url);

        return grid.map((coord, index) => {
            return <mesh key={index}  position={coord} rotation={[-Math.PI / 2, 0, 0]} map={texture}>
                <planeBufferGeometry args={[scale, scale]} />
                <meshStandardMaterial map={texture}/>
            </mesh>
        })
    }


    function TexturedPlane({ url , args, position }) {
        const texture = useLoader(TextureLoader, ...url);

        return (
            <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} >
                <planeBufferGeometry attach="geometry" args={args} />
                <meshStandardMaterial map={texture} transparent={true} />
            </mesh>
        );
    };

    return (
        <>

            <Suspense fallback={null}>
              
                <TexturedPlane url={["/textures/bar/png/0000-Level_0--03-Tiles_decoration.png"]}position={[0,1,0]} args={[40, 40]}/>               

                <TexturedPlane url={["/textures/bar/png/0000-Level_0--01-Furniture.png"]}position={[0,2,0]} args={[40, 40]}/>
                <TexturedPlane url={["/textures/bar/png/0000-Level_0--00-Tables_and_Chairs.png"]}position={[0,3,0]} args={[40, 40]}/>
            </Suspense>
            {/* {mappedGrid} */}
        </>
    )
}

export default ClockTowerBarTex;