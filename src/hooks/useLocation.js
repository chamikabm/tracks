import { useState, useEffect } from 'react';
import {
  Accuracy, requestPermissionsAsync, watchPositionAsync,
} from 'expo-location';

const useLocation = (shouldTrack, callback) => {
  const [ error, setError ] = useState('');
  const [ subscriber, setSubscriber ] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      }, callback);
      setSubscriber(sub);
    } catch (err) {
      console.log(`Something went wrong while requesting permissions. ${err}`);
      setError(err);
    }
  };

  useEffect(() => {
    if(shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  // In the `useEffect` hook, if we pass a variable from the array, it will monitor
  // for that variable value and if it get changed at any point of time the code
  // inside the `useEffect` hook will run again. If we pass a empty array(i.e : [])
  // to the `useEffect` hook, it will only executed once.

  return [error];
};

export default useLocation;

