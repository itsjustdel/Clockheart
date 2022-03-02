const TalkCompleteScreenGUI = ({handleClick}) => {
    
    
    
    return(
        <>
            <div className="bossItems">
                <ul className="npcItemList">
                    <li className='questItem'>                    
                        <button onClick={handleClick} >Head Back to Tavern</button>
                    </li>                  
                </ul>
            </div>
        </>
    )
}

export default TalkCompleteScreenGUI