import { createSelector } from 'reselect';
import { IApplicationState } from '../types';

const itemsSelector = (state: IApplicationState) => state.items;

export const getResults = createSelector(
  itemsSelector,
  (state: any) => state.results,
);

export const getCurrentItem = createSelector(
  itemsSelector,
  (state: any) => state.currentItem,
);