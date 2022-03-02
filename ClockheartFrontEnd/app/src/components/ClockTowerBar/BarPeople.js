import TexturedPlane from "../Scenes/TexturedPlane";


const BarPeople = ({playerMesh}) => {
    

    return(
        <>
            <TexturedPlane url={["/people/blondeBlueHatSide.png"]}position={[0.2, 4.4, 11.4]} args={[3, 3]}/>
            <TexturedPlane url={["/people/pinkHairFront.png"]}position={[1.3, 4.5, 10]} args={[3, 3]}/>
            <TexturedPlane url={["/people/redHairSide.png"]}position={[11.6, 4.6, 8.3]} args={[3, 3]}/>
            <TexturedPlane url={["/people/whiteBeardBlueTopFront.png"]}position={[9.9, 4.4, 7.2]} args={[3, 3]}/>
            <TexturedPlane url={["/people/bubbleGumHairSide.png"]}position={[8.7, 4.5, 8.5]} args={[3, 3]} speech="Is that a clockheart?!" playerMesh={playerMesh}/>
            <TexturedPlane url={["/people/smallBowlChildOrangeOutfitBack.png"]}position={[14, 4.3, 6]} args={[3, 3]}/>
            <TexturedPlane url={["/people/weeOldBaldFront.png"]}position={[14.1, 4.5, 3.3]} args={[3, 3]}/>
            <TexturedPlane url={["/people/oldWomanHeadScarfLeft.png"]}position={[15.4, 4.7, 4.8]} args={[3, 3]}/>
            <TexturedPlane url={["/people/whiteHandsBack.png"]}position={[14.2, 4.4, 11.5]} args={[3, 3]}/>
            <TexturedPlane url={["/people/oldLadyPurpleDressLeft.png"]}position={[15.3, 4.3, 10.5]} args={[3, 3]}/>
            <TexturedPlane url={["/people/pinkHeadscarfBack.png"]}position={[1.7, 4.4, 6.7]} args={[3, 3]}/>
            <TexturedPlane url={["/people/greenHairDuffleRight.png"]}position={[0.3, 4.5, 6.2]} args={[3, 3]}/>
            <TexturedPlane url={["/people/redHairPrincessBack.png"]}position={[6, 4.5, 2.4]} args={[3, 3]}/>

            <TexturedPlane url={["/people/whiteBeardBluePriestRight.png"]}position={[-9.8, 4.7, -0.6]} args={[3, 3]} speech="Careful... you don't understand what you're entering" playerMesh={playerMesh}/>



        </> 
    )
}

export default BarPeople