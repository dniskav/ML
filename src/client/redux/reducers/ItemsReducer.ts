import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { SET_ITEM, SET_ITEMS_LIST } from '../actions/index';

export const initialState: any = {
  results: {},
  currentItem: {image: { src: "https://placekitten.com/g/180/180", alt: "$ 5000" }, price: "5", data: { description: "Apple Ipod touch 5g 16 gb Negro", status: "Igual A Nuevo Completo Único!" }, location: "Armenia"},
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
        results: { ...action.payload as any }
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
