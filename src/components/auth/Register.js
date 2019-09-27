import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import Particles from "react-particles-js";
import Alerts from '../layouts/Alerts';

const particleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 2500
      }
    },
    color: {
      value: "#FFF"
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
    }
  }
};

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

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
    if (name === "" || email === "" || password === "") {
      setAlert("Llena todos los campos", "danger");
    } else if (password !== passwordCon) {
      setAlert("Las contraseñas deben de ser iguales", "danger");
    } else {
      console.log("Register submit");
    }
  };

  return (
    <div className="containerRegister">
      <Particles params={particleOpt} className="particlesRegister" />
      <div className="containerResgiterForm">
        <h1>Regístrate</h1>
        <Alerts />
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
      <div className="containerParticlesRegister"></div>
    </div>
  );
};

export default Register;
