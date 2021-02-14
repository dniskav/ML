import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { SET_ITEM } from '../actions/index';

export const initialState: any = {
  items: [],
};

type IActionType = any;

export type actionType = Action<TypeConstant> & PayloadAction<TypeConstant, IActionType>;

export const itemsReducer = (
  state: any = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, IActionType>,
): any => {
  switch (action.type) {
    case SET_ITEM: {
      return {
        ...state,
        items: { ...action.payload as any }
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default itemsReducer;
