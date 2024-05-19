import React from 'react';
import Loader from './Loader';
import banana from '/images/banana.svg';
import monkeybanana from '/images/monkeybanana.svg';
import winframe from '/images/winframe.svg';

interface Props {
  setMode: any;
}

const Win: React.FC<Props> = (props) => {
  const Positions = [
    { top: "2%", left: "-17%",rotation:"30deg" },
    { top: "50%", left: "-20%",rotation:"90deg" },
    { top: "40%", left: "90%",rotation:"50deg" },
    { top: "80%", left: "-5%",rotation:"26deg" },
    { top: "20%", left: "100%",rotation:"43deg"
     },
  ];

  return (
    <div className="containerwin">
      <div className="overlaywin"></div>
      <Loader bananas={6} />
      <div className="image-containerwin">
        <img className="earned-image" src={winframe} alt="win frame" />
        <img className="monkey-image" src={monkeybanana} alt="monkey" />
        {Positions.map((position, index) => (
          <img
            key={index}
            src={banana}
            alt={`banana-${index}`}
            className="banana-imagewin"
            style={{
              top: position.top,
              left: position.left,
              transform: `rotate(${position.rotation})`,
            }}
          />
        ))}

      </div>
      <button className="buttonfinal" onClick={() => props.setMode('instructions')}>
      </button>
    </div>
  );
};

export default Win;
