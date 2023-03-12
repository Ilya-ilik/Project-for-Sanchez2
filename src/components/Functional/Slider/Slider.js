import "./Slider.css";

function Slider(props) {
  return (
    <div className="slider_block">
      <p className={`slider_txt ${props.class}`}>{props.txt}</p>
      <input
        className="Slider"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={(e) => console.log('slider', e.target.value) }
      />
    </div>
  );
}

export default Slider;
