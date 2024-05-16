import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link">
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link">
              Contato
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/produtos" className="nav-link">
              Produtos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;