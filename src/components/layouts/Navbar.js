import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAutheticated, user } = authContext;

  const authLinks = (
    <Fragment>
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
      <li style={{ textDecoration: "none", color: "white" }}>
        Hola, {user && user.name}
      </li>
      <li style={{ textDecoration: "none", color: "white" }}>Salir</li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
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
        <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
          Regístrarse
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className="container">
      <ul className="leftSide">
        <li>logo</li>
        <li>
          <Link to="/user" style={{ textDecoration: "none", color: "white" }}>
            User
          </Link>
        </li>
      </ul>
      <ul className="rightSide"> {

       isAutheticated ? authLinks : guestLinks

      } </ul>
    </div>
  );
};

export default Navbar;
