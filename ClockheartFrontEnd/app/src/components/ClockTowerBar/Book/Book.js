import HTMLFlipBook from "react-pageflip"
import '../../../Css/Book.css'


const Book = () => {
    

        return (
          <HTMLFlipBook 
          width={300}
          height={400}
          drawShadow={true}
          maxShadowOpacity={0.5}
          showCover={true}
          id="book">
            <div id="front-cover">
            
            </div>
            <div id="page">
              <h1 id="title">History of The Machines</h1>
              <h5 id="title">Published by 'Red Guy'</h5>
            </div>
            <div id="page">
            <p id="paragraphs">During the days before man and machine lived side by side, there was a group of individuals who set out to learn and discover more about how to interact with machines. </p>
            <p id="paragraphs">They were known as <b>'The Developers'</b>. The stories of these individuals aren't known to be true, but from what historians believe, their real names were ...</p>
            </div>
            <div id="page">
                <ul id="no-bullets">
                    <li>Adam Kidd</li>
                    <li>Del Reid</li>
                    <li>Guilherme Nunes</li>
                    <li>Jack Cogan</li>
                    <li>Kirsten Buchan</li>
                    <li>Marijke Drench</li>
                    <li>Matthew McFarlane</li>
                    <li>Noah Valuks</li>
                </ul>
            </div>
            <div id="page">
                <ul id="no-bullets">
                    <li>Raminta Razauskaite</li>
                    <li>Robbie Ferguson</li>
                    <li>Ross Brown</li>
                    <li>Sacha Ponniah</li>
                    <li>Scott Reoch</li>
                    <li>Tamer Amer</li>
                    <li>Tony Fletcher</li>
                </ul>
            </div>
           
            <div id="page">
                <h3 id="paragraphs">With special thanks to...</h3>
                <ul id="no-bullets">
                    <li>Ally McGilloway</li>
                    <li>Anna Henderson</li>
                    <li>Craig Gough</li>
                    <li id="aqua">Peter Sullivan</li>
                    <li>Sky Su</li>
                    <li>Stan Tarnev</li>
                </ul>
            </div> 
            <div id="page">
                <h2 id="end-quote">"Things end, but memories last forever" </h2>
            </div>
          </HTMLFlipBook>
        );
      
}

export default Book