import React, { Component } from "react";
class InputEmail extends Component {
  render() {
    return (
    <form className="inputLogin">
      <h3>Email</h3>
      <input
      type="text"
      placeholder = "Digite seu e-mail aqui"
      className="inputEmail"
      />
      
      </form>
      );
    }
  }
  
  export default InputEmail;