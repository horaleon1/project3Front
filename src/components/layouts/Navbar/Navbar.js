import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import Logo from "../../../assets/MundoBlockchain.png";
import "./navbar.css";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { token, logout, user, menu } = authContext;

  const bitsoLink = "https://bitso.com/?ref=avfk";

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment className="authLinks">
      <li>
        <Link to="/about">¿Qué son las Criptomonedas?</Link>
      </li>
      <li>
        <Link to="/screener">Mercado</Link>
      </li>
      <li>
        <Link to="/newsSpanish">Noticias</Link>
      </li>
      <li>
        <a href={bitsoLink} target="_blank" rel="noopener noreferrer">
          Comprar Bitcoin
        </a>
      </li>
      <li>
        <Link to="/portfolio"> Hola,{user && user.name} </Link>
      </li>
      <li>
        <a onClick={onLogout} href="#!">
          Salir
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/about">¿Qué son las Criptomonedas?</Link>
      </li>
      <li>
        <Link to="/screener">Mercado</Link>
      </li>
      <li>
        <Link to="/newsSpanish">Noticias</Link>
      </li>
      <li>
        <a href={bitsoLink} target="_blank" rel="noopener noreferrer">
          Comprar Bitcoin
        </a>
      </li>
      <li>
        <Link to="/login">Iniciar Sesión</Link>
      </li>
      <li>
        <Link to="/register">Registrarse</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="container">
      <ul className="leftSide">
        <li>
          <a href="/">
            <img src={Logo} className="Logo" alt="Mundo Blockchain" />
          </a>
        </li>
        <li className="responsiveMenuIcon">
          <i class="fas fa-bars"></i>
        </li>
      </ul>
      <ul className="rightSide">{token ? authLinks : guestLinks}</ul>
      <div className="responsiveMenu">
        <ul>
          {token ? authLinks : guestLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
