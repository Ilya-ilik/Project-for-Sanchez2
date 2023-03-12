import "./HomePage.css";
import axios from "axios";
import Vector from "../../../assets/images/Vector.png";
import { useState } from "react";
import { useEffect } from "react";
import Label from "./../../Functional/Label/Label";
import Slider from "./../../Functional/Slider/Slider";
import Postscript from "./../../Functional/Postscript/Postscript";
import Input from "./../../Functional/Input/Input";
import Button from "./../../Functional/Button/Button";

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
      <div className="HomePage_content">
        <div className="third">
          <Label lblTxtLeft="bibap"  lblTxtRight="ass"/>
          <Postscript txt="простой генератор паролей" />
        </div>
        <div className="third">
          <Input table={table} img={Vector} />
          <Button btnTxt="сгенерировать пароль" onClick={refreshPage} />
          <Slider txt="Нужен сложный?" min={1} max={5} step={1} />
        </div>
        <div className="third">
          <Postscript txt="Bibaboys © 2023" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
