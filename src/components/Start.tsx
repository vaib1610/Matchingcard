import shadow from '/images/shadow.svg';
import cloud from '/images/cloud.svg';
import monkeyhappy from '/images/monkeyhappy.svg';
import start from '/images/start.svg';
// import { Button } from 'react-bootstrap';


interface NextButtonProps {
    onNextClick?:()=>void;
    };
const Start:React.FC<NextButtonProps> = (props) => {
  return (

    
    <div className="container">
   
     <div className="monkeycontainer">
    <img src={monkeyhappy} alt="Monkey" className="monkey" /> 
   
       <div  className='cloud'>
       <img src={cloud} className='cloudimage' alt="cloud"/>
    <div className='cloudtext'>
      <span>
        Welcome Kiddo!
      </span>
    </div>
      </div>
    
    

   
    <img src={shadow} alt="shadow" className="shadow"/>
    </div>  
    

      <button className='startbutton'  onClick={props.onNextClick}>
     



       <img src={start} className='buttonimage' />
     </button>  
 </div>
  
   
  )
}
export default Start