import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from '../components/Card';

function Home() {
  const produtos = [
    { id: 1, imagem: 'https://th.bing.com/th/id/OIP.hxsO5GBK2T8AEjvSG9UR-gHaHa?rs=1&pid=ImgDetMain', descricao: 'Saco Preto', preco: 'R$100' },
    { id: 2, imagem: 'https://images.tcdn.com.br/img/img_prod/675659/saco_lixo_verde_resistente_100_l_c_100_un_coleta_seletiva_465_1_432056d2ec274701dee6614e6787fd52.jpg', descricao: 'Saco Verde', preco: 'R$200' },
    { id: 3, imagem: 'https://th.bing.com/th/id/OIP.hxsO5GBK2T8AEjvSG9UR-gHaHa?rs=1&pid=ImgDetMain', descricao: 'Saco Preto', preco: 'R$100' },
    { id: 4, imagem: 'https://images.tcdn.com.br/img/img_prod/675659/saco_lixo_verde_resistente_100_l_c_100_un_coleta_seletiva_465_1_432056d2ec274701dee6614e6787fd52.jpg', descricao: 'Saco Verde', preco: 'R$200' },
    { id: 5, imagem: 'https://th.bing.com/th/id/OIP.hxsO5GBK2T8AEjvSG9UR-gHaHa?rs=1&pid=ImgDetMain', descricao: 'Saco Preto', preco: 'R$100' },
    { id: 6, imagem: 'https://images.tcdn.com.br/img/img_prod/675659/saco_lixo_verde_resistente_100_l_c_100_un_coleta_seletiva_465_1_432056d2ec274701dee6614e6787fd52.jpg', descricao: 'Saco Verde', preco: 'R$200' },
  ];

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center py-5">
        <h1>Produtos</h1>
        <p>Clique para conhecer nossos sacos</p>
        <a href="/produtos" className="btn btn-primary">
          Produtos
        </a>
      </div>

      {/* Componente de slideshow */}
      <Carousel autoPlay infiniteLoop style={{ maxHeight: '50vh' }}>
        {produtos.map(produto => (
          <div key={produto.id}>
            <img src={produto.imagem} alt={produto.descricao} style={{ maxHeight: '50vh', objectFit: 'cover' }} />
            <p className="legend">{produto.descricao}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
