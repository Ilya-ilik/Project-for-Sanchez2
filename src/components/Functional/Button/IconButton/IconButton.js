import "./IconButton.css";
import BasicButton from './../BasicButton/BasicButton';
import { useState } from 'react';

function IconButton(props) {
  const [showTooltip, setShowTooltip] = useState(false)
  const clickCopyIcon = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1000)
  }
  return (
    <BasicButton class="_icon" onClick={props.onClick}>
      {showTooltip && <div className="icon_btn_tooltip">
        <div className="tooltip_txt">скопировано</div>
      </div>}
      <div onClick={clickCopyIcon} className="icon_btn" alt={props.qeq}/>
    </BasicButton>
  );
}

export default IconButton;
