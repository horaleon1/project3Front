import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/video.mp4";


const footer = () => {
  return (
    <footer className="footerContainer">
      <div>
        <ul className="listFooter">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              ¿Qué es Blockchain?
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              Regístrase
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="listSocialFooter">
          <li> <a href="www.facebook.com" target="_blank">Facebook</a></li>
          <li>
          <video loop autoPlay style={{ height:"120px", width:"120px" }}>
            <source
              src={video}
              type="video/mp4"
            />
          </video>
          </li>
          <li> <a href="www.twitter.com" target="_blank">Twitter</a></li>
        </ul>
      </div>
      <div>
        Copyright &copy; Blockchain Technologies {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  );
};

export default footer;
