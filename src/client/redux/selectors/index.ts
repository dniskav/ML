import { createSelector } from 'reselect';
import { IApplicationState } from '../types';

const itemsSelector = (state: IApplicationState) => state.items;
const miscSelector = (state: IApplicationState) => state.miscellaneous;

export const getResults = createSelector(
  itemsSelector,
  (state: any) => state.results,
);

export const getCurrentItem = createSelector(
  itemsSelector,
  (state: any) => state.currentItem,
);

export const getBreadcrumbs = createSelector(
  miscSelector,
  (state: any) => state.breadcrumbs,
);