import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return { ...state, tracks: action.payload};
    case 'create_track':
      return {};
    default:
      return state;
  }
};

const fetchTracks = dispatch => (tracks) => {
  dispatch({ type: 'fetch_tracks', payload: tracks })
};
const createTrack = dispatch => (name, locations) => {
  console.log(name, locations.length)
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    {
      fetchTracks,
      createTrack,
    },
    []
    );