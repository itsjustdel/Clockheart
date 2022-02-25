import React, { Suspense, useState } from 'react';
import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader } from "three";
import { Html } from '@react-three/drei';
import PlayerItems from './PlayerItems'

const Player = ({playerStartPosition, playerTargetPosition, mesh, items }) => {
  
  //constant variables  
  const speed = 0.1;

  
  //use frame fires every time a new frame is drawn to the screen (around 60 times a second)
  //think of it almost like a while loop for (isGameRunning?)
  useFrame(() => {
    //loading textures can take time, the emsh will not be defined until the textues is loaded
    if(mesh.current == undefined)
      return;   
      
      //first of all check if we are close enough to the target- we can use speed because that's
      //how far we travel in one frame
      if(mesh.current.position.distanceTo(playerTargetPosition) < speed)
      {
        //if close we can clamp the position - accuracy like probably isn't necessary in a point and click game
        //set the mesh position - has to be done on each axis individually
        mesh.current.position.x = playerTargetPosition.x;
        mesh.current.position.y = 5//playerTargetPosition.y;
        mesh.current.position.z = playerTargetPosition.z;
        return;
      }

      //const { position } = mesh.current; //this works too, I'd like to know how destructuring like this works
      const position = mesh.current.position;
      
      //Maths. Subtracting one vector from another gives us a directional vector - we use this to send the player
      //in a direction      
      //subtract vectors method and normalise. Normalised vectors are of scale 1          
      const direction = new Vector3();
      direction.subVectors(playerTargetPosition, position).normalize();
      //apply speed to the "unit"/normalised vector
      const scaledVector = direction.multiplyScalar(speed, speed, speed);

      //set the mesh position - has to be done on each axis individually
      mesh.current.position.x += scaledVector.x;
      mesh.current.position.y =5;// scaledVector.y;
      mesh.current.position.z += scaledVector.z;
  });

  function TexturedPlane({ url }) {
     const texture = useLoader(TextureLoader, ...url);   
    
    return (
      <mesh ref={mesh} position={playerStartPosition} rotation ={[-Math.PI/2,0,0]}>
        <planeBufferGeometry attach="geometry" args={[1, 2]} />
        <meshStandardMaterial map={texture} transparent={true}/>
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