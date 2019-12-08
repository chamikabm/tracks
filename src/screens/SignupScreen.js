import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthFrom';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state, signup }  = useContext(AuthContext);

  return (
      <View style={styles.container}>
        <AuthForm
            headerText={'Sign up for Tracker'}
            errorMessage={state.errorMessage}
            submitButtonText={'Sign Up'}
            submitButtonIcon={'user-plus'}
            onSubmit={({ email, password }) => signup({ email, password })}
        />
        <NavLink
            text={'Already have an Account? Sign in Instead.'}
            routeName={'Signin'}
        />
      </View>
  );
};

// SignupScreen.navigationOptions = ({ navigation }) => {
//   return {
//     header: null, // This indicates that in this screen don't show header.
//   }
// };
// Above method also correct, only scenario we need to assign a function to the
// SignupScreen.navigationOptions instead of the object as follows, when we need to
// access the navigation object.


SignupScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default SignupScreen;
