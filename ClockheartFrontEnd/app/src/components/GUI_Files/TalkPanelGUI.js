import { getPlayerItems, updateItemInTable } from "../Services/ItemServices"

const TalkPanel = ({characters, items, setItems, setTalkPanel, setFightPanel, setTalkComplete, setTalkFailed, setText}) => {
    const newCharacters = [...characters]
    const player = newCharacters[0]
    const newItems = [...items]
    
    const transferGemToPlayer = () => {
        newItems.map((item) => {
            //gem hardcoded for now
            if(item.id === 10){
                item.character.id = 1
            }
        })
        setItems(newItems)
        console.log(getPlayerItems(items))

        getPlayerItems(newItems).map((item) => {
            return updateItemInTable(item)
        })
    }

    
    const handleSpeech = () => {
        let chance = 10
        console.log(player.charisma);

        const randomNumber = (min, max) => { // min and max included
            return Math.floor(Math.random() * (max - min+1)+min);
          }

        if(player.charisma === 10){
            chance = randomNumber(35, 100)
        }else{
            chance = randomNumber(5, 80)
        }

        if(chance >= 70){
            console.log(chance);
            console.log("YES");
            transferGemToPlayer()
            setTalkPanel(false)
            setTalkComplete(true)
        }else{
            console.log(chance);
            console.log("NO");
            setTalkFailed(true)
            setText("You have failed to convince me..")
            setTalkPanel(false)
        }


        
    }


    return(
        <>
             <div className="npcItems">
                <ul className="npcItemList">
                    <li className='questItem'>                    
                    <button onClick={handleSpeech}>Please Give Me The Gem!</button>
                        {/* <button  onClick={talkClick}>TALK</button>                     */}
                    </li>
                </ul>
            </div>

            <button onClick={handleSpeech}>Please Give Me The Gem!</button>
        </>
    )
}

export default TalkPanel