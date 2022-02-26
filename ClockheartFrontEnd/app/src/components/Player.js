import React, { Suspense, useState } from 'react';
import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader, Raycaster, DataTexture } from "three";

const Player = ({ playerStartPosition, playerTargetPosition, mesh }) => {
 
  const raycaster = new Raycaster();

  //use frame fires every time a new frame is drawn to the screen (around 60 times a second)
  //think of it almost like a while loop for (isGameRunning?)
  useFrame((state,delta) => {
    //loading textures can take time, the mesh will not be defined until the textues is loaded
    if (mesh.current == undefined)
      return;
      const speed = 5 * delta
    const direction = new Vector3();
    direction.subVectors(playerTargetPosition, mesh.current.position).normalize();
    const scaledVector = direction.multiplyScalar(speed, 0, speed);

    const rayStart = new Vector3(mesh.current.position.x,mesh.current.position.y, mesh.current.position.z);
    rayStart.add(new Vector3(scaledVector.x,0,scaledVector.z))
    raycaster.set(rayStart, new Vector3(0, -1, 0), 20);

    const intersects = raycaster.intersectObjects(mesh.current.parent.children)//using all atm, could optimise
    
    //catching re render, only ground plane loads before another re-render. Re-renders twice because of two state sets (fix?)
    // if(intersects.length <=1)
    //   return

    for (let i = 0; i < intersects.length; i++) {

      //Collision detection ////////-- refactor
      if(intersects[i].object.name == "Collision"){
       // console.log("collision")
        playerTargetPosition.x = mesh.current.position.x
        //y is always 5
        playerTargetPosition.z = mesh.current.position.z
        return        
      }
      
      //end of collision detection

      //ground plane detections

      if (intersects[i].object.name == "GroundPlane") {
        // console.log("gp")
        //first of all check if we are close enough to the target- we can use speed because that's
        //how far we travel in one frame
        if (mesh.current.position.distanceTo(playerTargetPosition) < speed) {
          //set the target position to the position we got to
          
          mesh.current.position.x = playerTargetPosition.x;
          mesh.current.position.y = 5//playerTargetPosition.y;
          mesh.current.position.z = playerTargetPosition.z;

          return;
        }

        //set the mesh position - has to be done on each axis individually
        mesh.current.position.x += scaledVector.x;
        mesh.current.position.y = 5;// scaledVector.y;
        mesh.current.position.z += scaledVector.z;

        //don't look for other collision, jump out of for loop
        break
      }

      //end of ground plane detections
   }
  });

  function TexturedPlane({ url }) {
    const texture = useLoader(TextureLoader, ...url);

    return (
      <mesh name='playerMesh' ref={mesh} position={playerStartPosition} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[1, 2]} />
        <meshStandardMaterial map={texture} transparent={true} />
      </mesh>
    );
  };

  //Suspense tag is needed because TextureLoader needs it (async)
  return (
    <>


      <Suspense fallback={null}>
        <TexturedPlane url={["/redguy.png"]} />
      </Suspense>
    </>
  )
};

export default Player;