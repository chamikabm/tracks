import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthFrom';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import SignupScreen from './SignupScreen';

const SigninScreen = () => {
  const { state, signin }  = useContext(AuthContext);

  return (
      <View style={styles.container}>
        <AuthForm
            headerText={'Sign In to Your Account.'}
            errorMessage={state.errorMessage}
            submitButtonText={'Sign Up'}
            submitButtonIcon={'sign-in'}
            onSubmit={({ email, password }) => signin({ email, password })}
        />
        <NavLink
            text={`Don't have an Account? Sign up Instead.`}
            routeName={'Signup'}
        />
      </View>
  );
};

SigninScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default SigninScreen;
