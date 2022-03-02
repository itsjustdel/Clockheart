import '../../Css/EndingScreen.css'

const EndingScreenGUI = ({handleTicketClick}) => {
    
    return(
        <>
        <div id="ticket-page">
        <button id="buy-ticket" onClick={handleTicketClick}>I have done what you asked...<br/>Give me my ticket for the blimp ride out of here!</button>
        </div>
        </>
    )
}

export default EndingScreenGUI