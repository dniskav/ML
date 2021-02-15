import { action } from 'typesafe-actions';
import axios from 'axios';
export const GET_ITEMS_LIST = '@@actions/GET_ITEMS_LIST';
export const SET_ITEMS_LIST = '@@actions/SET_ITEMS_LIST';
export const SET_ITEM = '@@actions/SET_ITEM';
export const SET_DETAIL_ITEM = '@@actions/SET_DETAIL_ITEM';
export const ITEMS_LOADER = '@@actions/ITEMS_LOADER';
export const SET_BREADCRUMBS = '@@actions/SET_BREADCRUMBS';

export const setItem = (item: any) => action(SET_ITEM, item);

export const itemsListLoader = (status: boolean) =>
  action(ITEMS_LOADER, status);

export const getitemsList = (items: any) => action(GET_ITEMS_LIST, items);

export const setitemsList = (items: any) => action(SET_ITEMS_LIST, items);

export const setDetailItem = (item: any) => action(SET_DETAIL_ITEM, item);

export const setBreadcrumbs = (bName: string, bUrl: string) => action(SET_BREADCRUMBS, { bName, bUrl});

export const fetchItemsList = (query: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(itemsListLoader(true));
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

export const fetchDetailItem = (id: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(itemsListLoader(true));
    const q = `https://api.mercadolibre.com/items/${id}`;
    try {
      const detailItemRes = await axios.get(q, {});
      const description = await axios.get(`${q}/description`, {});
      dispatch(setDetailItem({...detailItemRes.data, description: description.data.plain_text}));
      dispatch(setBreadcrumbs(detailItemRes.data.title, `${window.location.origin}/items/${id}`))
    } catch (err) {
      console.warn(`😢 ${err}`);
    } finally {
      dispatch(itemsListLoader(false));
    }
  };
};

