import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
  }

  _handleMudancaCategoria(event){
    event.stopPropagation();
    this.categoria = event.target.value; // cetegoria vai ser o valor do elemento que estamos selecionando
  } 

  /**
   * * Sempre que o Handler for chamado,
   * * vamos atribuir ao campo de títlo no atributo da classe;
   */
  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
          <option>Sem categoria</option>
          {this.props.categorias.map((categoria) => {
            return <option>{categoria}</option>;
          })}
        </select>
        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Título"
          onChange={this._handleMudancaTitulo.bind(this)} // pega o metodo dessa instância
        />

        <textarea
          rows={10}
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
