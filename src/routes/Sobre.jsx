function Sobre() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          padding: "2rem",
          borderRadius: "15px",
        }}
      >
        <h1 style={{ color: "white" }}>Sobre a nossa Loja de Sacos</h1>
        <p style={{ color: "white", textAlign: "justify" }}>
        Bem-vindo à nossa loja de sacos online! Oferecemos uma variedade de sacos de alta qualidade para todas as ocasiões. Navegue pela nossa coleção diversificada, desde mochilas práticas até bolsas de mão elegantes, e descubra o saco perfeito que combina com o seu estilo e atende às suas necessidades.
        </p>
      </div>
    </div>
  );
}

export default Sobre;
