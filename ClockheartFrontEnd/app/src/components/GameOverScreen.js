const GameOverScreen = ({handleDeath}) => {
    

    return(
        <>
            <h1>You lost your last screw</h1>
            <button onClick={handleDeath}>Play again...</button>
        </>
    )
}

export default GameOverScreen