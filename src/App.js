// import logo from './logo.svg';
import "./App.css";
import axios, { Axios } from "axios";
import React, { useEffect, useState, useRef } from "react";

function App() {
  const [table, setTable] = useState([]);
  //Получение данных с бека
  useEffect(() => {
    axios.get("http://bibapass.ru/api/v1/passwords").then((json) => {
      setTable(json.data.password);
    });
  }, []);

  let refreshPage = () => {
    window.location.reload();
  };

  const textAreaRef2 = useRef(null);

  let copyTextInput = () => {
    textAreaRef2.current.select(); // Эта строка выбирает от куда копировать
    document.execCommand("copy"); // Бех этой строки не копируется
  };

  return (
    <div className="App">
      <input value={table} ref={textAreaRef2}></input>

      <button type="button" onClick={refreshPage}>
        Новый пароль
      </button>

      <button onClick={copyTextInput}>Копировать пароль</button>
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
