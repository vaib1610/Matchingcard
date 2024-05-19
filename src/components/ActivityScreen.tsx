import React from "react";
import CardGame from "./CardGame";
import backbutton from '/images/backbutton.svg';

interface Props{
    onBackClick:()=>void;
    setMode:any

}

const ActivityScreen : React.FC<Props> = (props)=>{
  
return (
    <div className="container">
        
        <CardGame setMode={props.setMode}/>
        <button className="backbutton" onClick={props.onBackClick}>
    <img src={backbutton} alt="" />

</button>
    </div>
);
}

export default ActivityScreen;