import { action } from "typesafe-actions";
import axios from 'axios';
export const GET_ITEMS_LIST = "@@actions/GET_ITEMS_LIST";
export const SET_ITEMS_LIST = "@@actions/SET_ITEMS_LIST";
export const SET_ITEM = "@@actions/SET_ITEM";
export const FETCH_ITEMS = "@@actions/FETCH_ITEMS";
export const ITEMS_LOADER = "@@actions/ITEMS_LOADER";


export const setItem = (item: any) => action(SET_ITEM, item);

export const itemsListLoader = (status: boolean) => action(ITEMS_LOADER, status);

export const getitemsList = (items: any) => action(GET_ITEMS_LIST, items);

export const setitemsList = (items: any) => action(SET_ITEMS_LIST, items);

export const fetchItemsList = (query: any) => {
  return async (dispatch: any, getState: any) => {
      dispatch(itemsListLoader(true));
      const state = getState();
      const q = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
      try {
          const itemsListRes = await axios.get(q, {});
          dispatch(setitemsList(itemsListRes.data.results));
      } catch (err) {
          console.warn(`😢 ${err}`, 5);
      } finally {
          dispatch(itemsListLoader(false));
      }
  };
};
