const TalkFailedScreen = ({handleFight}) => {


    return(
        <>
          <div className="bossItems">
                <ul className="npcItemList">
                    <li className='questItem'>                    
                    <button onClick={handleFight}>FIGHT...</button>
                    </li>                  
                </ul>
            </div>


            
        </>
    )
}

export default TalkFailedScreen