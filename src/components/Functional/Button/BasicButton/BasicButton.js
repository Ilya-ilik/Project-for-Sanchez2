import "./BasicButton.css";

function BasicButton(props) {
  return (
    <div className={`button ${props.class}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default BasicButton;
