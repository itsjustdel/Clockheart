import Book from "./Book"

const BookGUI = ({setBookLocationOpen}) => {
  
        //reset gui panel in state
        setBookLocationOpen(true)

    return(
        <>
        <h2>Memory Book</h2>
            <Book />
        </>
    )
    }

export default BookGUI