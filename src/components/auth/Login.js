import React, { useState, useContext, useEffect } from "react";
import Particles from "react-particles-js";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import Alerts from "../layouts/Alerts";



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

const Login = (props) => {

  const alertContext = useContext(AlertContext);
  
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated){
      props.history.push('/portfolio');
    }


    if (error === 'Invalid Credentials') {
      setAlert('El correo o la contraseña son incorrectos');
      clearErrors();
    }
  });

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if(email === '' || password === ''){
      setAlert('Rellena todos los campos')
    }else{
     login({
       email,
       password
     })
    }
  };

  return (
    <div className="containerRegister">
      <Particles params={particleOpt} className="particlesRegister" />
      <div className="containerResgiterForm">
        <h1>Iniciar Sesión</h1>
        <Alerts />
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

export default Login;
