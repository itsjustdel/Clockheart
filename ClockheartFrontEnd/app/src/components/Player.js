import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useFrame, useLoader } from "@react-three/fiber"
import { Vector3, TextureLoader, Raycaster, DoubleSide, MeshBasicMaterial } from "three";



const Player = ({ playerTargets, setPlayerTargets, mesh }) => {
 
  const raycaster = new Raycaster();

  const [frontStand, backStand, leftStand, rightStand] = useLoader(TextureLoader, ["/characters/mainFront.png","/characters/mainBack.png","/characters/mainLeft.png","/characters/mainRight.png"]);
  const [leftWalk0,leftWalk1] = useLoader(TextureLoader, ["/characters/walkLeft0.png","/characters/walkLeft1.png"]);
  const [rightWalk0,rightWalk1] = useLoader(TextureLoader, ["/characters/walkRight0.png","/characters/walkRight1.png"]);
  const [frontWalk0,frontWalk1] = useLoader(TextureLoader, ["/characters/walkFront0.png","/characters/walkFront1.png"]);
  const [backWalk0,backWalk1] = useLoader(TextureLoader, ["/characters/walkBack0.png","/characters/walkBack1.png"]);
  

  const frame = useRef()
  const animationIndex = useRef()
  const lefts = [leftStand, leftWalk0, leftWalk1]
  const rights = [rightStand, rightWalk0, rightWalk1]
  const fronts = [frontStand, frontWalk0, frontWalk1]
  const backs = [backStand, backWalk0, backWalk1]

  useEffect(()=>{
    frame.current = 0
    animationIndex.current = 0
  })

  useFrame((state, delta) => {

    //loading textures can take time, the mesh will not be defined until the textues is loaded
    if (mesh.current == undefined)
      return;

    const speed = .1
    let direction = new Vector3();
    
    direction.subVectors(playerTargets[1], mesh.current.position)
    const rayStart = new Vector3(mesh.current.position.x, mesh.current.position.y, mesh.current.position.z);    
    raycaster.set(rayStart, new Vector3(0, -1, 0), 20);
    const intersects = raycaster.intersectObjects(mesh.current.parent.children)//using all atm, could optimise
    
    //catching re render, only ground plane loads before another re-render. Re-renders twice because of two state sets (fix?)
    // if(intersects.length <=1)
    //   return

    for (let i = 0; i < intersects.length; i++) {
    
      if(intersects[i].object.name == "Collision"){
     
        let newPlayerTargets = playerTargets
        newPlayerTargets[1].x = mesh.current.position.x
        newPlayerTargets[1].y = mesh.current.position.y
        newPlayerTargets[1].z = mesh.current.position.z

        setPlayerTargets(newPlayerTargets)
        return        
      }      
      const amendedTarget = new Vector3(playerTargets[1].x, mesh.current.position.y, playerTargets[1].z)
      const distanceToTarget =  mesh.current.position.distanceTo(amendedTarget)
      if (intersects[i].object.name == "GroundPlane") {
         
        //amended target flattens y levels
          
          //snap the plyer to its final position, but only do this if it doesn't already equal it - stops re renders
        if (!mesh.current.position.equals( playerTargets[1] )&& distanceToTarget < speed) {
          //set the target position to the position we got to          
          setPlayerTargets([mesh.current.position,mesh.current.position])
          return;
        }

        //re-use direction variable
        direction.subVectors(playerTargets[1],mesh.current.position)
        // set direction to unit vector
        direction.normalize()
        // now we can choose the length of the movement (speed)
        direction.multiplyScalar(speed, 0, speed);
        //set the mesh position - has to be done on each axis individually
        mesh.current.position.x += direction.x;
        mesh.current.position.y = 5; //player layer is always 5
        mesh.current.position.z += direction.z;

        //set walk direction        
        let faceDirection = new Vector3()
        faceDirection.subVectors(mesh.current.position, amendedTarget)
        const angle = Math.atan2(faceDirection.z,faceDirection.x)
        const degrees = 180*angle/Math.PI  
  
        let increase = (distanceToTarget /2)
        if(increase > 2)
          increase = 2

          if(increase < .5)
          increase =.5

        frame.current += increase        

        if(frame.current > 10){
          frame.current = 0
          animationIndex.current += 1
          if(animationIndex.current > 2)
            animationIndex.current = 1
        }
        
        if(distanceToTarget < .1 )
        {
          animationIndex.current = 0;
        }

        if(degrees > -45 && degrees < 45)                  
          mesh.current.material.map = lefts[animationIndex.current]           
        else if(degrees < -45  && degrees > -135)
          mesh.current.material.map = fronts[animationIndex.current]  
        else if(degrees > 45 && degrees < 135)
          mesh.current.material.map = backs[animationIndex.current]  
        else
          mesh.current.material.map = rights[animationIndex.current]  
        //don't look for other collision, jump out of for loop
        break
      }
   }   
  });

  function TexturedPlane() {   
    return (
      <>
      <mesh name='playerMesh' ref={mesh}  position={playerTargets[0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry  attach="geometry" args={[3, 3]} />
        <meshStandardMaterial map={frontStand} transparent={true} />
      </mesh>
      
      </>
    );
  };

  //Suspense tag is needed because TextureLoader needs it (async)
  return (
    <>
      <Suspense fallback={null}>
        <TexturedPlane />
      </Suspense>
    </>
  )
};

export default Player;