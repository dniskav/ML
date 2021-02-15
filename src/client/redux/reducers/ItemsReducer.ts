import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { SET_DETAIL_ITEM, SET_ITEMS_LIST } from '../actions/index';

export const initialState: any = {
  results: {},
  currentItem: {
    pictures: [{ url: ''}],
  },
};

type IActionType = any;

export type actionType = Action<TypeConstant> & PayloadAction<TypeConstant, IActionType>;

export const itemsReducer = (
  state: any = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, IActionType>,
): any => {
  switch (action.type) {
    case SET_DETAIL_ITEM: {
      return {
        ...state,
        currentItem: { ...action.payload as any }
      };
    }
    case SET_ITEMS_LIST: {
      return {
        ...state,
        results: { ...action.payload as any }
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default itemsReducer;
