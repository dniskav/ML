import { combineReducers } from 'redux';
import { IApplicationState } from '../types';
import itemsReducer from './ItemsReducer';
import { miscReducer } from './miscReducer';

const rootReducer = combineReducers<IApplicationState>({
  items: itemsReducer,
  miscellaneous: miscReducer,
});

export default rootReducer;
