import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SigninScreen = () => {

  return (
      <View>
        <Text style={styles.text}>Signin Screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default SigninScreen;
