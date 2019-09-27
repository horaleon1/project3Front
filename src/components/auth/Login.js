import React, { useState } from "react";

const Signin = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user,[e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Login submit');
  }

  return (
    <div className="containerRegister">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={onSubmit}>
        
        <div className="formContainer">
          <label>
            Correo Electrónico
          </label>
          <input type="email" name="email" value={email} onChange={onChange} autoComplete="on"/>
        </div>
        <div className="formContainer">
          <label>
            Contraseña
          </label>
          <input type="password" name="password" value={password} onChange={onChange} autoComplete="on" />
        </div>
       
        <input type="submit" value="Inicio" className="submit"/>
      </form>
    </div>
  )
};

export default Signin;
