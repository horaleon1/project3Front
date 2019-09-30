import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAutheticated, user, logout } = authContext;

  const onLogout = () => {
    logout();
  }

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/">
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/about" >
          ¿Qué es Blockchain?
        </Link>
      </li>
      <li>
        <Link to="/explorer">
          Explorador
        </Link>
      </li>
      <li>
        Hola, {user && user.name}
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
        Salir
        </a>
        </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/">
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/about">
          ¿Qué es Blockchain?
        </Link>
      </li>
      <li>
        <Link to="/explorer">
          Explorador
        </Link>
      </li>
      <li>
        <Link to="/login">
          Iniciar Sesión
        </Link>
      </li>
      <li>
        <Link to="/register">
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
          <Link to="/user">
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
