import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">2024 - todos os direitos reservados.</span>

        <a href="https://www.facebook.com" className="text-dark">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com" className="text-dark">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" className="text-dark">
          <FaLinkedin />
        </a>
        <a href="https://www.gmail.com" className="text-dark">
          <CgMail />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
