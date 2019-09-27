import React, { useReducer } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';


// import setAuthToken from '../../utils/setAuthToken';

import {
  SET_ALERT,REMOVE_ALERT
} from '../types';

const AuthState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer( alertReducer, initialState);

  const setAlert = (msg, type, timeout = 5000) => {
   const id = uuid.v4();
   dispatch({
     type: SET_ALERT,
     payload: { msg, type, id}
   });

   setTimeout(() => dispatch({ type: REMOVE_ALERT, payload:id }), timeout)
  }

  // set Alert
  // const loadUser = async () => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }

  //   try {
  //     const res = await axios.get('/api/auth');

  //     dispatch({
  //       type: USER_LOADED,
  //       payload: res.data
  //     });
  //   } catch (err) {
  //     dispatch({ type: AUTH_ERROR });
  //   }
  // };

  // Register User
  // const register = async formData => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };

  //   try {
  //     const res = await axios.post('/api/users', formData, config);

  //     dispatch({
  //       type: REGISTER_SUCCESS,
  //       payload: res.data
  //     });

  //     loadUser();
  //   } catch (err) {
  //     dispatch({
  //       type: REGISTER_FAIL,
  //       payload: err.response.data.msg
  //     });
  //   }
  // };

  // Login User
  // const login = async formData => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };

  //   try {
  //     const res = await axios.post('/api/auth', formData, config);

  //     dispatch({
  //       type: LOGIN_SUCCESS,
  //       payload: res.data
  //     });

  //     loadUser();
  //   } catch (err) {
  //     dispatch({
  //       type: LOGIN_FAIL,
  //       payload: err.response.data.msg
  //     });
  //   }
  // };

  // Logout
  // const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  // const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AuthState;