import "./Label.css";

function Label(props) {
  return  <div className="label">{props.lblTxtLeft}<div className="__red">{props.lblTxtRight}</div></div>;
}

export default Label;
