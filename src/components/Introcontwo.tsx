import nextbutton from '/images/nextbutton.svg';
import backbutton from '/images/backbutton.svg';
import monkeyhappy from '/images/monkeyhappy.svg';
import shadow from '/images/shadow.svg';
import cloud from '/images/cloud.svg';
// import { useState } from 'react';

interface Props  {
onNextClick:()=>void;
onBackClick:()=>void;
}
const Introcontwo:React.FC<Props> = (props) => {


  // const [isMoved, setIsMoved] = useState<boolean>(false);
  // const [leftPosition, setLeftPosition] = useState<string>('50%');

  // const handleNextButtonClick = () => {

  //   setIsMoved(true);
  //   setTimeout(()=>{
  //     props.onNextClick();
  //   },1000);
  

  return (
    <div className='container'>


<div className="monkeycontainer">
    <img src={monkeyhappy} alt="Monkey" className="monkey" style={{transform:"translateX(-30%)"}}  />
    <div className='cloud'>

    <img src={cloud} alt="cloud" />
    <div className='cloudtext' style={{ lineHeight: "1.2",display:"flex" ,flexDirection:"row" }}>
      <div >
        Can you help me <br/> get some?🤔
        
     
        
      </div>
      

        
    </div>
    </div>

   
    <img src={shadow} alt="shadow" className="shadow"/>
    </div>
    <button className="startbutton" onClick={props.onNextClick}>
            <img src={nextbutton} className='buttonimage'  alt="" />
        </button>

<button className="backbutton" onClick={props.onBackClick}>
    <img src={backbutton} alt="" />

</button>

    </div>
  )
}
export default Introcontwo;