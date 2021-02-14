import { combineReducers } from 'redux';
import { IApplicationState } from '../types';
import { itemsReducer } from './itemsReducer';

const rootReducer = combineReducers<IApplicationState>({
  items: itemsReducer,
});

export default rootReducer;
