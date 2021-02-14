import { combineReducers } from 'redux';
import { IApplicationState } from '../types';
import { itemsReducer } from './itemsReducer';
import { miscReducer } from './miscReducer';

const rootReducer = combineReducers<IApplicationState>({
  items: itemsReducer,
  itemsLoader: miscReducer,
});

export default rootReducer;
