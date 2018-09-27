import { FETCH_USER } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log( "payload data returned from FETCH_USER is: " + action.payload.data)
      console.log("action type passed to auth reducer is: " + action.type)
      return action.payload.data || false;
    default:
      return state;
  }
}