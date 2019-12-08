import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthFrom';

const SignupScreen = ({ navigation }) => {
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
        <TouchableOpacity
            onPress={() => navigation.navigate('Signin')}
        >
          <Spacer>
            <Text
                style={styles.link}
            >
              Already have an Account? Sign in Instead.
            </Text>
          </Spacer>
        </TouchableOpacity>
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
  link: {
    color: 'blue',
    textAlign: 'center',
  },
});

export default SignupScreen;
