import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/singup', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(`Something went wrong while signing up. ${err.message}`);
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.' })
    }
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request to API to signup.

  }
};

const signout = (dispatch) => {
  return () => {
    // make api request to API to signup.

  }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {
      signup,
      signin,
      signout,
    },
    {
      isSignedIn: false,
      errorMessage: '',
    },
);