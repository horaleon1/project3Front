import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/video.mp4";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div>
        <ul className="listSocialFooter">
          <li>
            <a href="www.facebook.com" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <video loop autoPlay style={{ height: "100px", width: "100px" }}>
              <source src={video} type="video/mp4" />
            </video>
          </li>
          <li>
            <a href="www.twitter.com" target="_blank">
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
            <Link to="/about">¿Qué es Blockchain?</Link>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/register">Regístrase</Link>
          </li>
        </ul>
      </div>
      <div>
        Copyright &copy; Blockchain Technologies {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  );
};

export default Footer;
