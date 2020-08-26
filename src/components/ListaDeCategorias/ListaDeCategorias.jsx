import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(event) {
    if (event.key === "Enter") {
      console.log("adicionar categoria");
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicione uma categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
