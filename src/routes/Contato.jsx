import React, { useState } from "react";

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", descricao: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="p-5 bg-light rounded">
        <h1>Entre em contato conosco</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="nome" onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={handleChange} />
          </label>
          <label>
            Descrição:
            <textarea name="descricao" onChange={handleChange} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
        <h2>Telefone</h2>
        <h3>11 9999-9999</h3>
        <h2>Email</h2>
        <h3>contato@sacos.com.br</h3>
      </div>
    </div>
  );
}

export default Contato;
