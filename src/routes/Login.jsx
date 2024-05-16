import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const usuario = useRef();
  const senha = useRef();

  const getUsuario = sessionStorage.getItem("usuario");
  const getSenha = sessionStorage.getItem("senha");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.current.value === "Admin" && senha.current.value === "12345") {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);

      sessionStorage.setItem("usuario", "Admin");
      sessionStorage.setItem("senha", token);
    } else {
      alert("Usuario e senha Inválidos !!!");
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center vh-100">
      {getUsuario && getSenha ? (
        <Portifolio />
      ) : (
        <form onSubmit={handleSubmit} className="p-5 bg-light rounded">
          <div className="mb-3">
            <label className="form-label">Usuário:</label>
            <input type="text" placeholder="Digite seu Usuário" ref={usuario} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Senha:</label>
            <input type="password" placeholder="Digite sua senha" ref={senha} className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Entrar</button>
        </form>
      )}
    </section>
  );
}
export default Login;
