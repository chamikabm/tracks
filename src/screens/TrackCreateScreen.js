import '../test/mockLocation';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import {
  requestPermissionsAsync, watchPositionAsync, Accuracy,
} from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [ error, setError] = useState('');

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      }, (location) => {
        console.log('Location : ', location);
        addLocation(location);
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
