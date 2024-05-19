import { useEffect,useState } from "react";
import Loader from "./Loader";
// import backbutton from '/images/backbutton.svg';
import nextbutton from '/images/nextbutton.svg';
import itsamatch from '/images/itsamatch.svg';
import redcardgame from '/images/redcardgame.svg';
import bluecardgame from '/images/bluecardgame.svg';
import arrowup from '/images/arrowup.svg';
import arrowdown from '/images/arrowdown.svg';
// import match from '/images/match.svg';
import smallpebble from '/images/smallpebble.svg';



interface Props  {
    setMode:any;
}

interface RedCard {
    fruit: string;
    icon: string;
}
  
interface BlueCard extends RedCard {
    letter: string;
}



const CardGame : React.FC<Props> = (props) => {

  const [redCardlist, setRedCardlist] = useState<any[]>([]);
  const [blueCardlist, setBlueCardlist] = useState<any[]>([]);
  const [corrected, setCorrected] = useState<string[]>([]);
  const [isMatched, setIsMatched] = useState<boolean>(false);
  const [selectedRedCard, setSelectedRedCard] = useState< RedCard | null>();
  const [selectedBlueCard, setSelectedBlueCard] = useState< BlueCard | null>();
  const [moves, setMoves] = useState(5);
 


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/collection.json');
            const data = await response.json();
            const shuffledBlue=data.cards.sort(()=>Math.random()-0.5).slice(0,6);
           const filledArrays = fillRedAndBlueArrays(shuffledBlue);
           console.log(filledArrays);
            setRedCardlist(filledArrays.red);
            setBlueCardlist(filledArrays.blue);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

      const fillRedAndBlueArrays = (shuffledBlue: any[]) => {
        const redCards = shuffledBlue.map((card) => {
          return {
            type: "red",
            fruit: card.fruit,
            icon: card.icon
          };
        });
        const thirdElement = shuffledBlue[2];
        const remainingElements = shuffledBlue.filter((_, index) => index !== 2);
    
       
        const shuffledRemaining = remainingElements.sort(() => Math.random() - 0.5);
    
       
        shuffledRemaining.splice(3, 0, thirdElement);

      
        const blueCards = shuffledRemaining.map((card) => {
          return {
            type: "blue",
            fruit: card.fruit,
            icon: card.icon,
            letter: card.letter
          };
        });
      
        return { red: redCards, blue: blueCards };
      };

    //   const shuffleArray = <T,>(array: T[]): T[] =>  {
    //     for (let i = array.length - 1; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     if (array.length > 6) {
    //         array = array.slice(0, 6);
    //       }
        
    //       return array;
    //   };


    const selectRedCard =(data:RedCard) => {
        if (!selectedRedCard) {
         setSelectedRedCard(data);
        }
      };
    
  const selectBlueCard = async (data: BlueCard) => {
     if (!selectedBlueCard && selectedRedCard) {

     setSelectedBlueCard(data);
    
     setTimeout(() => {
     if (selectedRedCard.fruit !== data.fruit) {
         setSelectedRedCard(null);
         setSelectedBlueCard(null);
         setMoves(moves - 1);
      if (moves === 1 && corrected.length !== 5) {
         props.setMode("gameover");
           }
         } else {
      if (corrected.length === 5) {
         props.setMode("win");
         return;
              }
         setCorrected([...corrected, data.fruit]);
        setIsMatched(true);
            }
          }, 1000);
        }








    }

  return (
    <div className="containergame">
    <Loader bananas={corrected.length} />
    
  
    {isMatched && (
      <div className="overlay">
        <div className="overlay-bg"></div>
        <button
        className="startbutton"
          onClick={() => {
            setIsMatched(false);
            setSelectedRedCard(undefined);
            setSelectedBlueCard(undefined);
          }}
        >
          <img
            src={nextbutton}
            alt="start"
            className="buttonimage"
          />
        </button>
        <div className="matched-cards">
          <img
            className="match-text"
            src={itsamatch}
            alt="match text"
          />
          <div className="red-card animated-rotate animated-slide-in-left">
            {selectedRedCard?.icon}
          </div>
          <div className="blue-card animated-slide-in-right">
            {selectedBlueCard?.letter}
            <div className="icon-background">
            {selectedBlueCard?.icon}
          </div>
          </div>
        </div>
      </div>
    )}
    <div className="cards-container">
      <div className="red-cards">
        {!selectedBlueCard && !selectedRedCard && corrected.length == 0 && (
          <div className="bounce-arrow-top">
            <img className="" src={arrowup} alt="arrow" />
          </div>
        )}
        {redCardlist.map((cardData) => {
          const isSelected =
            selectedRedCard && selectedRedCard.fruit === cardData.fruit;
          const isCorrected = corrected.includes(cardData.fruit);
          return (
            <div
              key={cardData.fruit}
              onClick={() => selectRedCard(cardData)}
              className={`card ${isCorrected ? "invisible" : ""} ${
                !selectedRedCard ? "hover-scale" : ""
              } ${isSelected ? "flipped" : ""}`}
            >
              {selectedRedCard && selectedRedCard.fruit === cardData.fruit ? (
                <div className="red-card-content">
                  {cardData.icon}
                </div>
              ) : (
                <img src={redcardgame} className="redcardgame" alt="card" />
              )}
            </div>
          );
        })}
      </div>
      <div className="blue-cards">
        {selectedRedCard && !selectedBlueCard && corrected.length == 0 && (
          <div className="bounce-arrow-bottom">
            <img className="animate-bounce" src={arrowdown} alt="arrow" />
          </div>
        )}
        {blueCardlist.map((cardData) => {
          const selected =
            selectedBlueCard && cardData.fruit === selectedBlueCard.fruit;
          const isCorrected = corrected.includes(cardData.fruit);
          return (
            <div

              key={cardData.fruit}
              onClick={() => selectBlueCard(cardData)}
              className={`card repeatbg ${isCorrected ? "invisible" : ""} ${
                selectedRedCard && !selectedBlueCard ? "hover-scale" : "" 
              } ${selected ? "flipped" : ""}`}
              
            >
              {selected ? (
                <div style={{ 
                 
                 }} className="blue-card-content">
                  {cardData.letter}
                  <div className="icon-background">
            {cardData.icon}
          </div>
                
                </div>
              ) : (
                <img src={bluecardgame} className="bluecardgame" alt="card" />
              )}
            </div>
          );
        })}
      </div>
    </div>
    
    <div className="limit">
    <img src={smallpebble} style={{position: "absolute", top:"5%",right:"10%"}} />
    <img src={smallpebble} style={{position: "absolute", bottom:"20%",left:"10%",width:"15px"}} />
    <div style={{fontSize:"20px",marginTop:"20px",display:"flex",alignItems: "center", justifyContent: "center",textAlign: "center"}}>
      wrong attempts left
    </div>

    {moves}
   
    
      
    </div>
    
      
    {/* </div> */}
  </div>
  )
  
}

export default CardGame;