import "./HomePage.css";
import axios from "axios";
import Vector from "../../../assets/images/Vector.png";
import { useState } from "react";
import { useEffect } from "react";
import Button from "./../../Functional/Button/Button";
import Label from "./../../Functional/Label/Label";
import Slider from "./../../Functional/Slider/Slider";
import Postscript from './../../Functional/Postscript/Postscript';

function HomePage(props) {
  console.log(props.config);

  const [table, setTable] = useState([]);

  useEffect(() => {
    axios.get(props.config).then((json) => {
      setTable(json.data.password);
    });
  }, [props.config]);

  let refreshPage = () => {
    axios.get(props.config).then((json) => {
      setTable(json.data.password);
    });
  };

  return (
    <div className="HomePage">
      <div className="central_block">
        <Label lblTxt="bibapass" />
        <Postscript txt="простой генератор паролей" />
        <div className="input">
          <div className="input_password">{table}</div>{" "}
          <img src={Vector} alt="qeq" onClick={() => console.log("qeq")} />
        </div>
        <Button btnTxt="сгенерировать пароль" onClick={refreshPage} />
        <Slider txt="Нужен сложный?" min={1} max={5} step={1} />
        <Postscript txt="Bibaboys © 2023" />
      </div>
    </div>
  );
}

export default HomePage;
