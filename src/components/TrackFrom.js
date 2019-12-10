import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackFrom = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [ saveTrack ] = useSaveTrack();

  console.log(locations.length);

  const buttonAction = recording ? stopRecording : startRecording;
  const buttonTitle = recording ? 'Stop Recording.' : 'Start Recording.';
  const showSaveButton = !recording && locations.length;

  return (
      <>
        <Spacer>
          <Input
              value={name}
              placeholder={'Enter name'}
              onChangeText={changeName}
          />
        </Spacer>
        <Spacer>
          <Button
              icon={
                <Icon
                    name='location-arrow'
                    size={24}
                    color='white'
                />
              }
              title={buttonTitle}
              onPress={buttonAction}
              titleStyle={styles.titleStyle}
          />
        </Spacer>
        {
          showSaveButton ?
              <Spacer>
                <Button
                    icon={
                      <Icon
                          name='save'
                          size={24}
                          color='white'
                      />
                    }
                    title={'Save Track'}
                    onPress={saveTrack}
                    titleStyle={styles.titleStyle}
                />
              </Spacer> : null
        }
      </>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginLeft: 10,
  },
});

export default TrackFrom;
