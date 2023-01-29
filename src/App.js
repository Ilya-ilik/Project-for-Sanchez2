// import logo from './logo.svg';
import Vector from './images/Vector.png';

import "./App.css";
import axios, { Axios } from "axios";
import React, { useEffect, useState, useRef } from "react";

function App(props) {

  let config2 = "http://bibapass.ru/api/v1/passwords";

  console.log(props.config)

  const [table, setTable] = useState([]);
  //Получение данных с бека
  useEffect(() => {
    axios.get(props.config).then((json) => {
      setTable(json.data.password);
    });
  }, []);

  let refreshPage = () => {
    // window.location.reload();

    axios.get(props.config).then((json) => {
      setTable(json.data.password);
    });
  };

  const textAreaRef2 = useRef(null);

  let copyTextInput = () => {
    textAreaRef2.current.select(); // Эта строка выделяет что будет скопировано от куда копировать
    document.execCommand("copy"); // Бех этой строки не копируется
  };


  // let testFunction = () => { 
  //   console.log("da")
  // };

  

  return (
    <div className="App">

{/* код ползунка */}

      
{/* код ползунка */}


      <div className="central_block">
        <div className="logo">bibapass</div>
        <p className="first_text">простой генератор паролей</p>
        <div className="input" ><div className='input_password' ref={textAreaRef2} >{table}</div> <img src={Vector} onClick={copyTextInput} /></div> 
        {/* <div className='button'><p className='button_text'>Сгенерировать пароль</p></div> */}
        <div className='button' onClick={refreshPage}>Сгенерировать пароль</div>
        <p className='difficulty_text'>Нужен сложный?</p>
        <input className='polzunok' type='range' min={1} max={800}step={1}></input> {/* это строка с ползунком */}
        <p className='copyright'>Bibaboys © 2023</p>
      </div>
     



      {/* <input className="input" value={table} ref={textAreaRef2} ></input>  */}

      {/* <input value={table} ref={textAreaRef2}></input> */}

      {/* <button type="button" onClick={refreshPage}>
        Новый пароль
      </button> */}

      {/* <button onClick={copyTextInput}>Копировать пароль</button>  */}
    </div>
  );
}

export default App;

// http://bibapass.ru/api/v1/passwords

// Пример кода копирования пароля
// const [copySuccess, setCopySuccess] = useState(''); Здесь храниться сотояние выводимого текста после копирования что он скопирован к функц не отн
// const textAreaRef = useRef(null);

// function copyToClipboard(e) {
//   textAreaRef.current.select(); Эта строка выбирает от куда копировать
//   document.execCommand('copy'); Бех этой строки не копируется
//   // This is just personal preference.
//   // I prefer to not show the whole text area selected.
//   e.target.focus();  эта строка убирает выделение с текста который скопирован
//  setCopySuccess('Copied!');    В этой строке setCopySuccess принемает просто новую строку которую выведет это не влияет на функционал
// };

//  html
// <div>
// <button onClick={copyToClipboard}>Copy</button>
// {/* {copySuccess} */}
// </div>

// <form>
// <textarea
// ref={textAreaRef}
// value='Some text to copy'
// />
// </form>
