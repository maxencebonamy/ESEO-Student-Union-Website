import './footer.css';
import logo from "../assets/logo.svg";

function Footer() {
    return (
        <div id="footer">
            <img src={logo} alt="Logo" />
            <p>© 2020-2023 BDE ESEO Angers</p>
        </div>
    );
}

export default Footer;
