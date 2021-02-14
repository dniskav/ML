import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { ITEMS_LOADER } from '../actions/index';

export const initialState: any = {
  itemsLoader: false,
};

type IActionType = any;

export type actionType = Action<TypeConstant> & PayloadAction<TypeConstant, IActionType>;

export const miscReducer = (
  state: any = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, IActionType>,
): any => {
  switch (action.type) {
    case ITEMS_LOADER: {
      return {
        ...state,
        itemsLoader: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default miscReducer;
