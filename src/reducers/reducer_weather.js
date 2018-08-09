import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('action received:', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      if (!action.payload.data) {
        alert('Incorrect city name, please input a correct city name.');
        return state;
      } else {
        return [action.payload.data, ...state];
      }

    default:
      return state;
  }
}
