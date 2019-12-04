import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrackDetailScreen = () => {

  return (
      <View>
        <Text style={styles.text}>TrackDetail Screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default TrackDetailScreen;
