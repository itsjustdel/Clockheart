const GameOverScreenGUI = ({handleDeath}) => {
    

    return(
        <>
            <div className="bossItems">
                <ul >
                    <li className='questItem'>                    
                        <button onClick={handleDeath}>Play again...</button>
                    </li>                                     
                </ul>
            </div>
        </>
    )
}

export default GameOverScreenGUI