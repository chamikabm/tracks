import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';

const TrackFrom = () => {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);


  const buttonAction = recording ? stopRecording : startRecording;
  const buttonTitle = recording ? 'Start Recording.' : 'Stop Recording.';

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
