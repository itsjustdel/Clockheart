import TexturedPlane from "./TexturedPlane";

const StreetPeople = ({playerMesh}) => {
    

    return(
        <>
            <TexturedPlane url={["/people/blondeHairSide.png"]}position={[-3.5, 4.5, 18.7]} args={[3, 3]}/>
            <TexturedPlane url={["/people/redHairSide.png"]}position={[-0.5, 4.3, 18.5]} args={[3, 3]}/>
            <TexturedPlane url={["/people/bubbleGumHairSide.png"]}position={[-22, 4.5, -8.5]} args={[3, 3]}/>
            <TexturedPlane url={["/people/whiteBeardBlueTopFront.png"]}position={[-20.5, 4.4, -10.5]} args={[3, 3]}/>
            <TexturedPlane url={["/people/pinkHairFront.png"]}position={[-18.5, 4.0, -1.5]} args={[3, 3]}/>
            <TexturedPlane url={["/people/greenHairYellowTopFront.png"]}position={[-18.5, 4.4, 3.5]} args={[3, 3]}/>
            <TexturedPlane url={["/people/lightBlueHairBack.png"]}position={[-17.7, 4.2, 6]} args={[3, 3]} />
            <TexturedPlane url={["/people/purpleDressSide.png"]}position={[-17.7, 4.3, 9.5]} args={[3, 3]}/>
            <TexturedPlane url={["/people/greenHairBlueBowSide.png"]}position={[-0.2, 4.2, 13]} args={[3, 3]}/>
            <TexturedPlane url={["/people/blondeHairSide.png"]}position={[-18, 4.1, 15.5]} args={[3, 3]}/>
            <TexturedPlane url={["/people/purpleLongHairSide.png"]}position={[-14.5, 4.2, 17.9]} args={[3, 3]}/>
            <TexturedPlane url={["/people/whiteOutfitSide.png"]}position={[-12.5, 4.3, 18.8]} args={[3, 3]}/>
            <TexturedPlane url={["/people/wiseManSide.png"]}position={[16, 4.5, 17]} args={[3, 3]}/>
            <TexturedPlane url={["/people/whiteMaidHatFront.png"]}position={[14.8, 4.5, 15]} args={[3, 3]}/>
            <TexturedPlane url={["/people/blondeBlueHatSide.png"]}position={[-19, 4.1, 0]} args={[3, 3]} speech="Go away Clockheart!" playerMesh={playerMesh} />
            <TexturedPlane url={["/people/redHairSide.png"]}position={[-11.5, 4.3, -10]} args={[3, 3]} speech="Noone likes you" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/aliceInWonderlandSide.png"]}position={[-19.5, 4.1, -9]} args={[3, 3]} speech="You don't belong here" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/silverHairSide.png"]}position={[-11.5, 4.2, -3.5]} args={[3, 3]} speech="We don't want you here!" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/blueBack.png"]}position={[-2, 4.4, 19.5]} args={[3, 3]} speech="How can they show their face here?!" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/purpleHairSide.png"]}position={[13.5, 4.1, 13.8]} args={[3, 3]} speech="I won't sell to a CLOCKHEART!" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/oldLadyGlassesSide.png"]}position={[-19.4, 4.5, 5]} args={[3, 3]} speech="Why won't they just go?" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/blueHairFront.png"]}position={[0.7, 4.1, 12]} args={[3, 3]} speech="I heard they're trouble" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/blueHairSideClipSide.png"]}position={[2, 4.3, 12.7]} args={[3, 3]} speech="I heard they don't sleep" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/pinkBonnetSide.png"]}position={[-11, 4.4, 8.8]} args={[3, 3]} speech="I say we run them out of town" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/yellowClothesFront.png"]}position={[-17.5, 4, 14]} args={[3, 3]} speech="Clockheart..." playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/redPigTailsBack.png"]}position={[-17.5, 4.4, 17.5]} args={[3, 3]} speech="Go find your own place" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/blackHairSide.png"]}position={[-9.5, 4.5, 13]} args={[3, 3]} speech="Go AWAY!" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/blueHairBack.png"]}position={[15, 4.1, 18]} args={[3, 3]} speech="Walking around like they belong here..." playerMesh={playerMesh}/>
        </>
    )
}

export default StreetPeople