import "./Input.css";
import IconButton from './../Button/IconButton/IconButton';

function Input(props) {
  return (
    
    <div className={`input ${props.class}`}>
      <div className="input_password">{props.pass}</div>{" "}
      <IconButton class="input-icon" img={props.img} onClick={()=> console.log('qeq')} />
    </div>
  )
}

export default Input;
