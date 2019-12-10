import '../test/mockLocation';
import React, { useContext, useCallback } from 'react';
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
  const callback = useCallback((location) => {
    addLocation(location, state.recording);
  }, [state.recording]);
  // In the above `useCallback` hook , it will look for `state.recording` variable
  // value changes and if it got change, then `useCallback` will rebuild the callable,
  // which solve the stale call back issue.
  const [ error ] = useLocation(isFocused, callback);

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
