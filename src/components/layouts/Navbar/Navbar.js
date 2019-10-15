import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import Logo from '../../../assets/MundoBlockchain.png';
import './navbar.css';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAutheticated,logout, user } = authContext;

  const bitsoLink = "https://bitso.com/?ref=avfk";

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
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
        <a href={bitsoLink} target="_blank" rel="noopener noreferrer">
          Comprar Bitcoin
        </a>
      </li>
      <li>Hola, {user && user.name}</li>
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
        <Link to="/news">Noticias</Link>
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

  let getLinksMenu=()=>{
    console.log('isAuthenticated',isAutheticated);
    if (isAutheticated){
    
      return authLinks;
    }else{
      return guestLinks;
    }
  }

  return (
    <div className="container">
      <ul className="leftSide">
        <li>
          <a href="/">
          <img src={Logo} className="Logo" alt="Mundo Blockchain"/>
          </a>
        </li>
      </ul>
      <ul className="rightSide"> {getLinksMenu()} </ul>
    </div>
  );
};

export default Navbar;
