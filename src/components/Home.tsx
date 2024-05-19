import React, { useState } from "react";
import Start from "./Start";
import Introconone from "./Introconone";
import Introcontwo from "./Introcontwo";
import Instructions from "./Instructions";
import ActivityScreen from "./ActivityScreen";
import GameOver from "./GameOver";
import Win from "./Win";
// import styles from './styles.module.css';

interface Props {}

const Home: React.FC<Props>= () => {
  const [mode, setMode] = useState<string>("start");

  return (
    <div 
    className="main" 
    style={{ backgroundImage: `url('/images/bg-svg.svg')`,backgroundSize: '100%', 
    }}>
      {mode === "start" && (<Start 
       onNextClick={() => setMode("introconone")}/>)}
      {mode === "introconone" && (<Introconone  
      onNextClick={()=>setMode("introcontwo")}
      onBackClick={()=>setMode("start")}/>)}

      {mode === "introcontwo" && (<Introcontwo 
      onNextClick={()=>setMode("instructions")} 
      onBackClick={()=>setMode("introconone")} /> )}
      {mode === "instructions" && (<Instructions 
      onNextClick={()=>setMode("activityscreen")}
      onBackClick={()=>setMode("introcontwo")}/>)}
      {mode === "activityscreen" && (<ActivityScreen
       onBackClick={()=>setMode("instructions")}  
       setMode={setMode}/>
       )}
       {mode === "gameover" && (<GameOver
       onBackClick={()=>setMode("instructions")}/>)}
       {mode === "win" && (<Win 
       setMode={setMode}/>)}
       
 

    </div>
  );
};

export default Home;
