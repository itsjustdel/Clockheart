import TexturedPlane from "./TexturedPlane";


const BarPeople = () => {
    

    return(
        <>
            <TexturedPlane url={["/people/blondeBlueHatSide.png"]}position={[0, 4.5, 12]} args={[3, 3]}/>
            <TexturedPlane url={["/people/pinkHairFront.png"]}position={[1.3, 4.5, 10]} args={[3, 3]}/>
            <TexturedPlane url={["/people/redHairSide.png"]}position={[11.6, 4.5, 8.3]} args={[3, 3]}/>
            <TexturedPlane url={["/people/whiteBeardBlueTopFront.png"]}position={[9.9, 4.5, 7.2]} args={[3, 3]}/>
            <TexturedPlane url={["/people/bubbleGumHairSide.png"]}position={[8.7, 4.5, 8.5]} args={[3, 3]}/>
        </> 
    )
}

export default BarPeople