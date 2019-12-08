import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);

  console.log('currentLocation', currentLocation);

  if(!currentLocation) {
    return (
        <ActivityIndicator
            size={'large'}
            style={styles.loading}
        />
    );
  }

  // Used initially to check how the Map behaves.
  //
  // let points = [];
  // for (let i =0; i < 20; i ++) {
  //   points.push({
  //     latitude: 37.33233 + (i * 0.001),
  //     longitude: -122.03121 + (i * 0.001),
  //   })
  // }

  return (
      <>
        <MapView
            style={styles.map}
            initialRegion={{
              ...currentLocation.coords,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            region={{
              ...currentLocation.coords,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
        >
        </MapView>
      </>
  );
};

const styles = StyleSheet.create({
  loading: {
    marginTop: 200,
  },
  map: {
    height: 300,
  }
});

export default Map;
