import '../test/mockLocation';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import {
  requestPermissionsAsync, watchPositionAsync, Accuracy,
} from 'expo-location';

const TrackCreateScreen = () => {
  const [ error, setError] = useState('');

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      }, (location) => {
        console.log(location);
      });
    } catch (err) {
      console.log(`Something went wrong while requesting permissions. ${err}`);
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h3>TrackCreate Screen</Text>
        <Map/>
        { error ? <Text>Please enable location services.</Text> : null}
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default TrackCreateScreen;
