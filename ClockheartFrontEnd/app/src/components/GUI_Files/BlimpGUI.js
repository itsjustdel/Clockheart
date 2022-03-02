import '../../Css/Blimp.css'

const Blimp = ({handlePlayAgain}) => {
    



    return(
        <>
        <div id="ending" className="npcContainer">
            <div id="justblimp"></div>
            <div id="end-text">As one door closes, another will open...<br/>The Clockheart will return</div>
            <button id="play-again" onClick={handlePlayAgain} >Play again...</button>
        </div>
        </>
    )
}

export default Blimp