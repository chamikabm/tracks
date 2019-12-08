import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthFrom';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage }  = useContext(AuthContext);

  return (
      <View style={styles.container}>
        <NavigationEvents
            onWillBlur={clearErrorMessage}
        />
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
