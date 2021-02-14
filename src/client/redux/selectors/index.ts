import { createSelector } from 'reselect';
import { IApplicationState } from '../types';

const itemSelector = (state: IApplicationState) => state.items;

export const getItem = createSelector(
  itemSelector,
  (state: any) => state,
);