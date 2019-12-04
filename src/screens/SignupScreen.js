import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignupScreen = () => {

  return (
      <View>
        <Text style={styles.text}>Signup Screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default SignupScreen;
