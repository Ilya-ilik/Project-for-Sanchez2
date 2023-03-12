import "./Postscript.css";

function Postscript(props) {
  return <div className={`postscript ${props.class}`}>{props.txt}</div>;
}

export default Postscript;
