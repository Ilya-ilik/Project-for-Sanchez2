import "./Slider.css";
import { useState } from "react";

const passLvlTxt = (valueNumber) => {
  let result = ''
  switch (+valueNumber) {
    case 1:
      result = "простейший";
      break;
    case 2:
      result = "легкий";
      break;
    case 3:
      result = "средний";
      break;
    case 4:
      result = "сложный";
      break;
    case 5:
      result = "сложнейший";
      break;
    default:
      result = ''
  }
  return result;
};

function Slider(props) {
  const [passLvl, setPassLvl] = useState(1);
  return (
    <div className="slider_block">
      <p className={`slider_txt ${props.class}`}>{props.txt}</p>
      <input
        className="Slider"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={passLvl}
        onChange={(e) => setPassLvl(e.target.value)}
      />
      <p className="slider_txt">{passLvlTxt(passLvl)}</p>
    </div>
  );
}

export default Slider;
