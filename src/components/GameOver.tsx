import monkeynosmile from '/images/monkeynosmile.svg';
import backbutton from '/images/backbutton.svg';
interface Props  {
    onBackClick:()=>void;
}
const GameOver:React.FC<Props> = (props)=> {
  return (
   <div className='container' style={{position:"relative",display:"flex", flexDirection:"column",
    
   }}>
    <div>
    <img className="monkey" src={monkeynosmile} alt="monkey" />
    </div>
    
    
   <div className="message-box" style={{
  position: "absolute",
  top: "20vh",
  width: "700px",
  height: "150px",
  backgroundColor: "#eaada0",
  fontSize: "3.5rem",
  zIndex: 600,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius:"3rem",
  border:"10px solid white",
  color:"white"
  

}}>
  Better Luck Next Time :(
</div>
<button className="backbutton" onClick={props.onBackClick}>
    <img src={backbutton} alt="" />

</button>
   </div>
   
  )
}
export default GameOver