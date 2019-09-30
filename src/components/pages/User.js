import React, { Component } from "react";
import Prices from "../layouts/Prices";
import axios from "axios";

const User = () => {
  return (
    <div>
      <Prices />
      <div className="sidebarUser">
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
        </ul>
      </div>
    </div>
  );
};

export default User;
