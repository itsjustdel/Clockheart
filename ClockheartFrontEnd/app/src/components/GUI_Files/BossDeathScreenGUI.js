const BossDeathScreenGUI = ({handleClick}) => {
    
    
    
    return(
        <>
            <div className="bossItems">
                <ul >
                    <li className='questItem'>                    
                        <button onClick={handleClick} >Head Back to Tavern</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default BossDeathScreenGUI