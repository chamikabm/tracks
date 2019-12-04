import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {

  return (
      <>
        <Text h3>Sign Up for Tracker</Text>
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
              leftIconContainerStyle={styles.leftIcon}
          />
        </Spacer>
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
          />
        </Spacer>
      </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
  leftIcon: {
    marginRight: 10,
  },
  titleStyle: {
    marginLeft: 10,
  },
});

export default SignupScreen;
