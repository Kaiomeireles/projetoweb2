import React from 'react';

function Card({ produto }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={produto.imagem} className="card-img-top" alt={produto.descricao} />
      <div className="card-body">
        <h5 className="card-title">{produto.descricao}</h5>
        <p className="card-text">{produto.preco}</p>
        <a href="#" className="btn btn-primary">Ver detalhes</a>
      </div>
    </div>
  );
}

export default Card;
