import "./Label.css";

function Label(props) {
  return  <div className={`label ${props.class}`}><div className="__red">{props.lblTxtLeft}</div>{props.lblTxtRight}</div>;
}

export default Label;
