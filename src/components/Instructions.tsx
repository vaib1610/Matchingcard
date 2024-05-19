
// import nextbutton from '/images/nextbutton.svg';
import backbutton from '/images/backbutton.svg';
import redapplecard from '/images/redapplecard.svg';
import redapplebackcard from '/images/redapplebackcard.svg';
import number1 from '/images/number1.svg';
import bluecard from '/images/bluecard.svg';
import number2back from '/images/number2back.svg';
// import joiningcurve from '/images/joiningcurve.svg';
import number2text from '/images/number2text.svg';
import redbluecard from '/images/redbluecard.svg';
import number3 from '/images/number3.svg';
import number3back from '/images/number3back.svg';
import playbutton from '/images/playbutton.svg';
import curve from '/images/curve.svg';
// import cardshadow from '/images/cardshadow.svg';
interface Props {
onNextClick:()=>void;
onBackClick:()=>void;

}
const Instructions:React.FC<Props> = (props) => {
  return (
    <div className="container">
<div className='gridContainer'>
      <img
          src={curve}
          className="curvescss"
          alt=""
        />
        <div className="bigcard">
                <div className='innercard'>
                        <img src={redapplebackcard} className="backcard" alt="" />
                        <img src={redapplecard} className='redcard' alt="" />
                </div>
                <img src={number1} className='stepone' alt="" />
                {/* <div className='cardNumber'>

                </div> */}
              <div className='cardtitle'>
Select a<br/> pink card
              </div>
              <div className='cardDescription'>
it has images
              </div>

        </div>
        <div className='bigcard'>
                <div className='innercard'>
                <img src={bluecard} className='bluecard' alt="" />
                </div>
                <div className='numbertag'>
                <img src={number2back} className='stepone' alt="" />
                <img src={number2text} className='stepnumbertag' alt="" />
                </div>
                
                {/* <div className='cardNumber'>

                </div> */}
                <div className='cardtitle'>
Select a <br/> blue card 
                </div>
                <div className='cardDescription'>
it has alphabets
                </div>
                </div>
                <div className='bigcard'>
                        <div className='innercard'>
                        <img src={redbluecard} className='redbluecard' alt="" />
                        </div>
                
                <div className='numbertag'>
                <img src={number3back} className='stepone' alt="" />
                <img src={number3} className='stepnumbertag' alt="" />
                
                </div>
                <div className='matchInfo'>
                        <div className='cardDescription'>
if they're same
                        </div>
                        <div className='cardtitle'>
                            its a match!     
                        </div>
                        <div className='cardDescription'>
otherwise retry :(
                        </div>
                
               
                </div>
                

        </div>

        </div>




<div>
{/* <img src={cardshadow} alt="" style={{position:"absolute"}} className="gridContainer"/> */}
<button className="startbutton" onClick={props.onNextClick}>
            <img src={playbutton} className='buttonimage'  alt="" />
        </button>

<button className="backbutton" onClick={props.onBackClick}>
    <img src={backbutton} alt="" />

</button>

    </div>
    </div>
  )
}
export default Instructions;