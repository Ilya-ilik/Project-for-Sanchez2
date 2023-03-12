import "./Button.css";

function Button(props) {
  return (
    <div className={`button ${props.class}`} onClick={props.onClick}>
      {props.btnTxt && <div className="button_txt">{props.btnTxt}</div>}
      {props.img && <img src={props.img} alt="qeq"/>}
    </div>
    );
}

export default Button;
