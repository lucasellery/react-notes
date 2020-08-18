import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";

function App() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Título" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Escreva sua nota"
        />
        <button>Criar Nota</button>
      </form>

      <ListaDeNotas />
    </div>
  );
}

export default App;
