import "./Input.css";
import IconButton from './../Button/IconButton/IconButton';
import { useClipboard } from 'use-clipboard-copy'

function Input(props) {
  const clipboard = useClipboard();
  return (    
    <div className={`input ${props.class}`}>
      <input ref={clipboard.target} className="input_password" value={props.pass}/>
      <IconButton class="input-icon" onClick={clipboard.copy} />
    </div>
  )
}

export default Input;
