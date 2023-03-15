import "./HomePage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Label from "./../../Functional/Label/Label";
import Slider from "./../../Functional/Slider/Slider";
import Postscript from "./../../Functional/Postscript/Postscript";
import Input from "./../../Functional/Input/Input";
import BasicButton from './../../Functional/Button/BasicButton/BasicButton';
import TxtButton from './../../Functional/Button/TxtButton/TxtButton';
import {URL} from "../../API/URL";

function HomePage() {
  const [tempPass, setTempPass] = useState('');

  const getTempPass = () => {
    axios.get(URL).then((json) => {
      setTempPass(json.data.password);
    });
  }

  useEffect(() => {
    getTempPass();
  }, []);

  return (
    <div className="HomePage">
      <div className="HomePage_content">
        <div className="piece">
          <Label class="_mt30" lblTxtLeft="biba"  lblTxtRight="ass"/>
          <Postscript txt="простой генератор паролей" />
        </div>
        <div className="piece _h250">
          <div className="piece">
            <Input class="_mb10" pass={tempPass}/>
            <TxtButton btnTxt="Сгенерировать пароль" onClick={getTempPass} />
            <BasicButton onClick={getTempPass} />
          </div>
          <div className="piece">
            <Slider class="_mt22px" txt="Выберите уровень сложности" min={1} max={5} step={1} />
          </div>
        </div>
        <div className="piece">
          <Postscript class="_mb40" txt="Bibaboys © 2023" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
