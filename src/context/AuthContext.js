import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
    case 'signin':
      return { ...state, token: action.payload, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: 'clear_error_message' });
  };
};

const tryLocalSignIn = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
      dispatch({ type: 'signin', payload: token });
      navigate('TrackList');
    } else {
      navigate('Signup');
    }
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/singup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });
      navigate('TrackList');
    } catch (err) {
      console.log(`Something went wrong while signing up. ${err.message}`);
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.' })
    }
  }
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/singin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
      navigate('TrackList');
    } catch (err) {
      console.log(`Something went wrong while signing in. ${err.message}`);
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign in.' })
    }
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow')
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {
      clearErrorMessage,
      tryLocalSignIn,
      signup,
      signin,
      signout,
    },
    {
      token: null,
      errorMessage: '',
    },
);