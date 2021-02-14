import { action } from "typesafe-actions";
export const GET_ITEM = "@@appProfile/GET_ITEM";
export const SET_ITEM = "@@appProfile/SET_ITEM";

export const setItem = (item: any) => action(SET_ITEM, item);
