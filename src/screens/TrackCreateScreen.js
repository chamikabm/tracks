import '../test/mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import TrackFrom from '../components/TrackFrom';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  // const [error] = useLocation((location) => addLocation(location));
  // We can simplify the call as follows.
  const [ error ] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording);
  });

  return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h3>TrackCreate Screen</Text>
        <Map/>
        { error ? <Text>Please enable location services.</Text> : null}
        <TrackFrom/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default withNavigationFocus(TrackCreateScreen);
