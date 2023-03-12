import "./Button.css";

function Button(props) {
  return <div className="button" onClick={props.onClick}>{props.btnTxt}</div>;
}

export default Button;
