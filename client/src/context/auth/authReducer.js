import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      console.log('USER_LOADED');
      console.log(action.payload);

      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
      console.log('REGISTER_SUCCESS');

    case LOGIN_SUCCESS:
      console.log('LOGIN_SUCCESS');
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
      console.log('REGISTER_FAIL');

    case AUTH_ERROR:
      console.log('AUTH_ERROR');

    case LOGIN_FAIL:
      console.log('LOGIN_FAIL');

    case LOGOUT:
      console.log('LOGOUT');

      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case CLEAR_ERRORS:
      console.log('CLEAR_ERRORS');

      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
