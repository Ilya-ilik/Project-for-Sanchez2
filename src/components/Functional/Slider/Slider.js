import "./Slider.css";

function Slider(props) {
  return (
    <>
      <p className="difficulty_text">{props.txt}</p>
      <input
        className="polzunok"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
      />
    </>
  );
}

export default Slider;
