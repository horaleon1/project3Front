import React from "react";
import { Link } from "react-router-dom";
// import video from '../../assets/video.mp4';
import img from "../../assets/logo192.png";
// import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1200
      },
      color: {
        value: "#FE280A"
      }
    },

    move: {
      enable: true,
      speed: 1.5,
      direction: "right",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
};

const Navbar = () => {
  return (
    <div className="container">
      <ul className="leftSide">
        <li>Logo</li>
      </ul>

      <ul className="rightSide">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            ¿Qué es Blockchain?
          </Link>
        </li>
        <li>
          <Link to="/explorer" style={{ textDecoration: "none", color: "white" }}>
            Explorador
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
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
  );
};

export default Navbar;
