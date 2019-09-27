import React, { useState } from "react";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 2800
      }
    },
    move: {
      enable: true,
      speed: 1,
      direction: "down",
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

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Login submit");
  };

  return (
    <div className="containerRegister">
      <Particles params={particleOpt} className="particlesRegister" />
      <div className="containerResgiterForm">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="formContainer">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              autoComplete="on"
            />
          </div>
          <div className="formContainer">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              autoComplete="on"
            />
          </div>

          <input type="submit" value="Inicio" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
