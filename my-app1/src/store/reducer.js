import {reducer as ReducerA} from '../pages/A/store';
import {reducer as ReducerB} from '../pages/B/store';
import {reducer as ReducerC} from '../pages/C/store';
import {combineReducers} from 'redux-immutable';

export default combineReducers({
  ReducerA,
  ReducerB,
  ReducerC
});
