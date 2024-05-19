import loaderfull from '/images/loaderfull.svg';
import banana from '/images/banana.svg';
interface Props {
bananas:number
};

const Loader:React.FC<Props> = (props) => {


    const width = ((props.bananas + 1) / 7) * 100;
  return (
 
     
    <div className="progress-container">
    <div style={{ width: `${width}%`, height: "100%" }} className="progress-bar">
      <img
        className="progress-image"
        src={loaderfull}
        alt=""
      />
    </div>
    <img
      src={banana}
      className="banana-image"
      alt="banana"
    />
  </div>
  
 

  
  )
}
export default Loader;