import React, { Component } from "react";
import "./style.css";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <h3 className="card-nota-titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota-texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;

/**
 * TODO: Nos cards criados só aparece o texto, fazer com que apareça o título também
 * TODO: https://github.com/alura-cursos/1817-react-classes/tree/aula5
 */