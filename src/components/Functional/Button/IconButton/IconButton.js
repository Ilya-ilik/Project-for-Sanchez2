import "./IconButton.css";
import BasicButton from './../BasicButton/BasicButton';

function IconButton(props) {
  return (
    <BasicButton class="_icon" onClick={props.onClick}>
      {props.img && <img src={props.img} alt={props.qeq}/>}
    </BasicButton>
  );
}

export default IconButton;
