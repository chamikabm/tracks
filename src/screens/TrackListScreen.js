import React, { useContext } from 'react';
import {
  Text, StyleSheet, FlatList, TouchableOpacity,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
      <>
        <NavigationEvents
            onWillFocus={fetchTracks}
        />
        <Text style={styles.text}>TrackList Screen</Text>
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
              return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('TrackDetail', { _id: item._id });
                    }}
                  >
                    <ListItem
                        chevron={true}
                        title={item.name}
                    />
                  </TouchableOpacity>
              );
            }}
        />
      </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default TrackListScreen;
