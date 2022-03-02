const BarterFailedScreenGUI = ({handleFight}) => {


    return(
        <>            
            <div className="bossItems">
                <ul >
                    <li className='questItem'>                    
                        <button onClick={handleFight}>FIGHT...</button>
                    </li>
                </ul>
            </div>
            
            
        </>
    )
}

export default BarterFailedScreenGUI