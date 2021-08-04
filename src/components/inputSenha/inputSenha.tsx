import React, { Component } from "react";
class InputSenha extends Component {
    render() {
        return (
        <form className="inputLogin">
            <h3>Senha</h3>
            <input
            type="text"
            placeholder = "Digite sua senha aqui"
            className="inputSenha"
            />
        </form>
      );
    }
  }
  
  export default InputSenha;