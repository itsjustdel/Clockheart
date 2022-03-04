import Book from "../ClockTowerBar/Book/Book"

const BookGUI = ({setBookLocationOpen}) => {
  
        //reset gui panel in state
        setBookLocationOpen(true)

    return(
        <>
            <Book />
        </>
    )
    }

export default BookGUI