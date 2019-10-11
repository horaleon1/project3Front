import React from "react";
import { Link } from "react-router-dom";

//Links of anchors
const facebook = "https://www.facebook.com";

const twitter = "https://www.twitter.com";

const bitsoLink = "https://bitso.com/?ref=avfk";

const linkedin = "https://www.linkedin.com/in/horacio-leon-85470a149/"

const ironhack = "http://www.ironhack.com/en/locations/mexico-city"

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
            <Link to="/screener">Mercado</Link>
          </li>
          <li>
            <Link to="/news">Noticias</Link>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/register">Regístrarse</Link>
          </li>
          <li>
            <a href={bitsoLink} target="_blank" rel="noopener noreferrer">
              Comprar Bitcoin
            </a>
          </li>
        </ul>
      </div>
      <div className="copyRightLine">
        Copyright &copy; Develop by: <a href={linkedin} target="_blank">Horacio León</a> in <a href={ironhack} target="_blank">Ironhack México</a> {new Date().getFullYear()} all
        rights reserved
      </div>
    </div>
  );
};

export default Footer;
