import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { ITEMS_LOADER, SET_BREADCRUMBS } from '../actions/index';
import BreadCrumbs from '../../components/BreadCrumbs/index';

export const initialState: any = {
  itemsLoader: false,
  breadcrumbs: {
    bName: "",
    bUrl: "",
  }
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
    case SET_BREADCRUMBS: {
      return {
        ...state,
        breadcrumbs: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default miscReducer;
