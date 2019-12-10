import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(currentTrack => currentTrack._id === _id);
  const coordinates = track.locations.map(location => location.coords);
  const initialCoords = track.locations[0].coords;

  return (
      <>
        <Text style={styles.text}>{track.name}</Text>
        <MapView
            initialRegion={{
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
              ...initialCoords,
            }}
            style={styles.map}
        >
          <Polyline coordinates={coordinates}/>
        </MapView>
      </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
