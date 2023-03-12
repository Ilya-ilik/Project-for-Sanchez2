import "./Input.css";
import Button from './../Button/Button';

function Input(props) {
  return (
    
    <div className="input">
      <div className="input_password">{props.table}</div>{" "}
      <Button class="input-icon" img={props.img} onClick={()=> console.log('qeq')} />
    </div>
  )
}

export default Input;
