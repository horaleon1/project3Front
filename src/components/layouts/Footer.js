import React from "react";
import { Link } from "react-router-dom";
// import bitso from '../../assets/bitso.png';
// import video from "../../assets/video.mp4";

const facebook = "https://www.facebook.com";

const twitter = "https://www.twitter.com";

const bitsoLink = "https://bitso.com/?ref=avfk";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        <ul className="listSocialFooter">
          <li>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          {/* <li>
            <video loop autoPlay style={{ height: "100px", width: "100px" }}>
              <source src={video} type="video/mp4" />
            </video>
          </li> */}
          <li>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="listFooter">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">¿Qué son las Criptomonedas?</Link>
          </li>
          <li>
            <Link to="/news">Noticias</Link>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/register">Regístrase</Link>
          </li>
          <li>
            <a href={bitsoLink} target="_blank" rel="noopener noreferrer">
              Comprar Bitcoin
            </a>
          </li>
        </ul>
      </div>
      <div>
        Copyright &copy; Blockchain Technologies {new Date().getFullYear()} all
        rights reserved
      </div>
    </div>
  );
};

export default Footer;
