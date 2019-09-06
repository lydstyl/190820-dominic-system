import React, { useReducer } from 'react';
import axios from 'axios';

import AuthContext from './authContext';
import authReducer from './authReducer';

import setAuthToken from '../../utils/setAuthToken';
import groupCards from '../../utils/groupCards';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_ERROR,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialSate = {
    token: localStorage.getItem('token'), // important
    isAuthenticated: localStorage.getItem('token') ? true : null,
    loading: true,
    user: null,
    error: null,
    msg: null
  };

  /*
    This function is used to show an error or msg to the user during a little time then to disapear.
  */
  const setError = error => {
    const msg = (
      <div className='alert alert-danger' role='alert'>
        {error}
      </div>
    );
    dispatch({ type: SET_ERROR, payload: msg });
    clearErrorAfter(4000);
  };

  const [state, dispatch] = useReducer(authReducer, initialSate);

  // Load User
  const loadUser = async () => {
    console.log('loadUser');

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/auth');
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  //saveDBCardsToLocal
  const saveDBCardsToLocal = async () => {
    try {
      // get cards from db
      const res = await axios.get('/api/paocards');
      // console.log('saveDBCardsToLocal res: ', res.data);

      // save not grouped cards copied from db in local
      localStorage.setItem('localCards', JSON.stringify(res.data));

      // save grouped cards in local
      groupCards(res.data);
    } catch (error) {
      console.log('Error in saveDBCardsToLocal: ', error);
    }
  };

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      loadUser();

      saveDBCardsToLocal();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
          ? err.response.data.msg
          : err.response.data
      });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/auth', formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      loadUser();

      saveDBCardsToLocal();
    } catch (err) {
      setError(
        err.response.data.msg ? err.response.data.msg : err.response.data
      );
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  // Clear Errors
  const clearErrorAfter = time => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ERRORS });
    }, time);
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        setError
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
