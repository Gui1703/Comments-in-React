import React, { useState } from "react";

import "./App.css";
import People from "./assets/people.svg";

function App() {
  // ESTADO => VARIÁVEL, SÓ QUE, ESSA VARIÁVEL VAI PERMITIR QUE EU ATUALIZE OS ITENS NA TELA

  const [comment, setComment] = useState();
  const [allComment, setAllComment] = useState([]);

  function ButtonComment() {
    const allPreviousComment = [...allComment, comment];

    setAllComment(allPreviousComment);
    document.getElementById("TextArea").value = "";
  }

  function Digit(event) {
    setComment(event.target.value);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      ButtonComment();
    }
  });

  return (
    <div className="Container">
      <img src={People} alt="Imagem pessoas" />
      <textarea
        id="TextArea"
        placeholder="Seu comentário aqui !"
        onChange={Digit}
      ></textarea>
      <button onClick={ButtonComment}>Comentar</button>

      <ul>
        {allComment.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
