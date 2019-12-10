import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
      <SafeAreaView forceInset={{ top: 'always'}}>
        <Text style={styles.text}>Account Screen</Text>
        <Spacer>
          <Button
              icon={
                <Icon
                    name={'sign-out'}
                    size={24}
                    color='white'
                />
              }
              titleStyle={styles.buttonStyle}
              title={'Sign Out'}
              onPress={signout}
          />
        </Spacer>
      </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name={'gear'} size={20}/>
};


// `SafeAreaView` component will make sure that it will not let the other content
// go beyond the available visible screen from any of the device types.

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    textAlign: 'center',
  },
  buttonStyle: {
    marginLeft: 10,
  },
});

export default AccountScreen;
