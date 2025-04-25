import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countdown-form">
        <label>
          <span>Titulo:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento"
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input type="date" name="date" />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder="Insira o url da imagem"
          />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input type="color" name="Color" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
