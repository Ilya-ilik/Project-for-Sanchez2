import "./Slider.css";

function Slider(props) {
  return (
    <>
      <p className="slider_txt">{props.txt}</p>
      <input
        className="Slider"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
      />
    </>
  );
}

export default Slider;
