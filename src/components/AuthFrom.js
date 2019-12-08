import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import Icon from 'react-native-vector-icons/FontAwesome';

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit, submitButtonIcon }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
      <>
        <Spacer>
          <Text h3 style={styles.text}>{headerText}</Text>
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
              autoCorrect={false} // This will disable the device saved passwords.
              leftIconContainerStyle={styles.leftIcon}
              secureTextEntry={true}
          />
        </Spacer>
        {
          errorMessage ?
              <Spacer>
                <Text style={styles.errorMessage}>
                  {errorMessage}
                </Text>
              </Spacer>
              : null
        }
        <Spacer>
          <Button
              icon={
                <Icon
                    name={submitButtonIcon}
                    size={24}
                    color='white'
                />
              }
              titleStyle={styles.titleStyle}
              title={submitButtonText}
              onPress={() => onSubmit({ email, password })}
          />
        </Spacer>
      </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
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
});

export default AuthForm;
