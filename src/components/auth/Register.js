import React, { useState } from "react";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: "#fff"
    },

    move: {
      enable: true,
      speed: 1,
      direction: "center",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
   
  }
};

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordCon: ""
  });

  const { name, email, password, passwordCon } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Register submit");
  };

  return (
    <div className="containerRegister">
      <div className="containerResgiterForm">
        <h1>Regístrate</h1>
        <form onSubmit={onSubmit}>
          <div className="formContainer">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              autoComplete="on"
            />
          </div>
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
          <div className="formContainer">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              name="passwordCon"
              value={passwordCon}
              onChange={onChange}
              autoComplete="on"
            />
          </div>
          <input type="submit" value="Regístrarse" className="submit" />
        </form>
      </div>
      <div className="containerParticlesRegister">
        <Particles
          params={particleOpt}
          id="particlesRegister"
        />
      </div>
    </div>
  );
};

export default Signup;
