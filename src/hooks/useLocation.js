import { useState, useEffect } from 'react';
import {
  Accuracy, requestPermissionsAsync, watchPositionAsync,
} from 'expo-location';

const useLocation = (shouldTrack, callback) => {
  const [ error, setError ] = useState('');
  // const [ subscriber, setSubscriber ] = useState(null);
  // Ideally we don't need to handle the subscriber as a state variable,
  // because we are only using this `subscriber` variable as a local reference.
  // we don't use it to render or something like that.



  useEffect(() => {
    let subscriber; // Without a state as above, we can use as a local variable.

    if(shouldTrack) {
      const startWatching = async () => {
        try {
          await requestPermissionsAsync();
          subscriber = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          }, callback);
        } catch (err) {
          console.log(`Something went wrong while requesting permissions. ${err}`);
          setError(err);
        }
      };
      startWatching()
    } else {
      if(subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => { // This is a clean up function introduced by react. This function get called first
      if(subscriber) { // -> when this `useEffect` hook run the second time. This avoids creating many
        subscriber.remove(); // -> subscribers at each time when this hook executed.
      }
    }
  }, [shouldTrack, callback]); // As a best practice, if we reference
  // any of the value in the Context, state or props, we should add them to
  // debs inputs array.

  // In the `useEffect` hook, if we pass a variable from the array, it will monitor
  // for that variable value and if it get changed at any point of time the code
  // inside the `useEffect` hook will run again. If we pass a empty array(i.e : [])
  // to the `useEffect` hook, it will only executed once.

  return [error];
};

export default useLocation;

