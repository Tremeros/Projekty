import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

export const USER_LOADED = 'USER_LOADED';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_fail';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const LOGOUT = 'LOGOUT';

// Load user
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
      setAuthToken(localStorage.token);
    }
  
    try {
      const res = await axios.get('/api/auth');
  
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    } catch(err) {
        console.log(err);
    //   dispatch({type: AUTH_ERROR})
    }
  };

  // Register user

  export const register = ({email, password}) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
      const body = JSON.stringify({email, password});
  
      try {
        const res = await axios.post('/api/users', body, config);
  
        dispatch({type: REGISTER_SUCCESS, payload: res.data});
  
        dispatch(loadUser());
  
      } catch(err) {
       const errors = err.response.data.errors;
  
       if(errors) {
         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
         console.log(errors.msg);
       }
  
       dispatch({type: REGISTER_FAIL});
    console.log('register failed')
      }
  };

  // Login user 

  export const login = (email, password) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
      const body = JSON.stringify({email, password});
  
      try {
        const res = await axios.post('/api/auth', body, config);
  
        dispatch({type: LOGIN_SUCCESS, payload: res.data});
  
        dispatch(loadUser());
  
      } catch(err) {
       const errors = err.response.data.errors;
  
       if(errors) {
         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        console.log(errors);
       }
  
       dispatch({type: LOGIN_FAIL});
    console.log('Logowanie nieduane')
      }
  };

  // Logout 

  export const logout = () => dispatch => {
    
    dispatch({type: LOGOUT});
  }