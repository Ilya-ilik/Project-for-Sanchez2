import "./Label.css";

function Label(props) {
  return  <div className={`label ${props.class}`}><div className="__red">{props.lblTxtLeft}</div>P<div className="__red">{props.lblTxtRight}</div></div>;
}

export default Label;
