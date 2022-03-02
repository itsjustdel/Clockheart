const BarterCantAffordScreenGUI = ({handleFight, setText}) => {


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

export default BarterCantAffordScreenGUI