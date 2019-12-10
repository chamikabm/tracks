import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';

const TrackFrom = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  console.log(locations.length)


  const buttonAction = recording ? stopRecording : startRecording;
  const buttonTitle = recording ? 'Stop Recording.' : 'Start Recording.';

  return (
      <>
        <Spacer>
          <Input
              value={name}
              placeholder={'Enter name'}
              onChangeText={changeName}
          />
        </Spacer>
        <Button
            title={buttonTitle}
            onPress={buttonAction}
        />
      </>
  );
};

export default TrackFrom;
