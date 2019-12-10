import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';

const useSaveTrack = () => {
  const { createTrack } = useContext(TrackContext);
  const { state: { name, locations } } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(name, locations);
  };

  return [saveTrack];
};

export default useSaveTrack;
