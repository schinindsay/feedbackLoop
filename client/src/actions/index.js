import axios from 'axios';
import { FETCH_USER } from './types';

//use redux thunk to create a function that wraps an expression to delay it's evaluation. 
//returns a function that you need to give a dispatch to 
//then the function that it returns will execute a promise
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log('response from fetchUser in action/index.js is: ' , res)
  dispatch({ type: FETCH_USER, payload: res});
};

//to update the "credits" on the client-side, we just want to get the updated user object because the "current_user" will have those credits. That's why we're dispatching the exact same action type and payload.
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};
