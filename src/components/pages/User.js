import React, { Component } from "react";
import Prices from "../layouts/Prices";
import axios from "axios";

const User = () => {
  return (
    <div className="containerUser">
      <Prices />
      {/* <div className="sidebarUser">
        <ul>
          <li className="userMenu">
            <ul className="userMenuList">
              <li>
                <a href="">Inicio</a>
              </li>
              <li>
                <a href="">Enviar</a>
              </li>
              <li>
                <a href="">Recibir</a>
              </li>
              <li>
                <a href="">Salir</a>
              </li>
              <li>
                <a href="">Ayuda</a>
              </li>
            </ul>
          </li>
         <li>
         <div className="displayBalance">
        <h1>Balance</h1>
      </div>
         </li>
        </ul>
      </div> */}
      <div class="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>

        <ul>
          <li>
            Versión 1.0.0
          </li>
        </ul>
      </div>

      <div className="second"> 
        <h1>Balance Total <span>0.00</span></h1>
      </div>
    </div>
  );
};

export default User;
