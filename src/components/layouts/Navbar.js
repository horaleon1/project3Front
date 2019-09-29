import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <ul className="leftSide">
        <li>
          logo
        </li>
      </ul>

      <ul className="rightSide">
      <li>
          <Link to="/user" style={{ textDecoration: "none", color: "white" }}>
           User
          </Link>
        </li>
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
          <Link
            to="/explorer"
            style={{ textDecoration: "none", color: "white" }}
          >
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
            Regístrarse
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
