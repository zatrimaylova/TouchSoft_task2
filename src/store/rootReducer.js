import { combineReducers } from 'redux';
import { counters } from '../ducks/counters';

export default combineReducers({
  counters,
});