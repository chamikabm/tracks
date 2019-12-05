import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup }  = useContext(AuthContext);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
      <View style={styles.container}>
        <Spacer>
          <Text h3 style={styles.text}>Sign Up for Tracker</Text>
        </Spacer>
        <Spacer>
          <Input
              placeholder='your@email.com'
              leftIcon={
                <Icon
                    name='envelope'
                    size={24}
                    color='grey'
                />
              }
              value={email}
              onChangeText={setEmail}
              autoCapitalize={'none'}
              autoCorrect={false}
              leftIconContainerStyle={styles.leftIcon}
          />
        </Spacer>
        <Spacer>
          <Input
              placeholder='password'
              leftIcon={
                <Icon
                    name='key'
                    size={24}
                    color='grey'
                />
              }
              value={password}
              onChangeText={setPassword}
              autoCapitalize={'none'}
              autoCorrect={false}
              leftIconContainerStyle={styles.leftIcon}
              secureTextEntry={true}
          />
        </Spacer>
        {
          state.errorMessage ?
              <Spacer>
                <Text style={styles.errorMessage}>
                  {state.errorMessage}
                </Text>
              </Spacer>
              : null
        }
        <Spacer>
          <Button
              icon={
                <Icon
                    name='sign-in'
                    size={24}
                    color='white'
                />
              }
              titleStyle={styles.titleStyle}
              title={'Sign Up'}
              onPress={() => signup({ email, password })}
          />
        </Spacer>
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
  text: {
    textAlign: 'center',
  },
  leftIcon: {
    marginRight: 10,
  },
  titleStyle: {
    marginLeft: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default SignupScreen;
