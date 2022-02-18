import React, { useState } from "react";
import People from "./assets/people.svg";

import { Container, TextArea, Button, Li, Ul } from './styles.js'
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
    <Container>
      <img src={People} alt="Imagem pessoas" />
      <TextArea
        id="TextArea"
        placeholder="Seu comentário aqui !"
        onChange={Digit}
      ></TextArea>
      <Button isOn={comment} onClick={ButtonComment}>Comentar</Button>

      <Ul>
        {allComment.map((cmt, index) => (
          <Li key={index}>{cmt}</Li>
        ))}
      </Ul>
    </Container>
  );
}

export default App;
