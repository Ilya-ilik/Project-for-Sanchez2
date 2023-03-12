import "./TxtButton.css";
import BasicButton from './../BasicButton/BasicButton';

function TxtButton(props) {
  return (
    <BasicButton class="_txt"  onClick={props.onClick}>
      {props.btnTxt && <div className="button_txt">{props.btnTxt}</div>}
    </BasicButton>
  );
}

export default TxtButton;
