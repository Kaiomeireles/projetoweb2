import React, { useState, useEffect } from "react";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("/dados.json")
      .then((response) => response.json())
      .then((data) => setProdutos(data.produto));
  }, []);

  const handleDelete = (id) => {
    setProdutos(produtos.filter(produto => produto.id !== id));
  }

  const handleUpdate = (id) => {
    const nome = prompt("Digite o novo nome do produto:");
    const desc = prompt("Digite a nova descrição do produto:");
    const valor = prompt("Digite o novo valor do produto:");
    setProdutos(produtos.map(produto => produto.id === id ? { ...produto, nome, desc, valor } : produto));
  }

  return (
    <div className="d-flex flex-wrap justify-content-around vh-100">
      {produtos.map((produto) => (
        <div className="card m-2" style={{ width: "18rem" }} key={produto.id}>
          <div className="card-body">
            <h5 className="card-title">{produto.nome}</h5>
            <p className="card-text">{produto.desc}</p>
            <p className="card-text">Valor: R$ {produto.valor}</p>
            <button onClick={() => handleUpdate(produto.id)}>Alterar</button>
            <button onClick={() => handleDelete(produto.id)}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Produtos;
