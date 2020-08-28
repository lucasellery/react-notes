import React, { Component } from "react";
import "./style.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <h4>{this.props.categoria}</h4>
          <h2 className="card-nota-titulo">{this.props.titulo}</h2>
        </header>
        <p className="card-nota-texto">{this.props.texto}</p>
        <DeleteSVG className="delete-card" onClick={this.apagar.bind(this)} />
      </section>
    );
  }
}

export default CardNota;
