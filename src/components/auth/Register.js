import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordCon: ""
  });

  const { name, email, password, passwordCon } = user;

  const onChange = e => setUser({ ...user,[e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Register submit');
  }

  return (
    <div className="containerRegister">
      <h1>Regístrate</h1>
      <form onSubmit={onSubmit}>
        <div className="formContainer">
          <label>
            Nombre
          </label>
          <input type="text" name="name" value={name} onChange={onChange} autoComplete="on"/>
        </div>
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
        <div className="formContainer">
          <label>
            Confirmar Contraseña
          </label>
          <input type="password" name="passwordCon" value={passwordCon} onChange={onChange} autoComplete="on"/>
        </div>
        <input type="submit" value="Registrase" className="submit"/>
      </form>
    </div>
  );
};

export default Signup;
