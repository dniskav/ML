import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { SET_ITEM } from '../actions/index';

export const initialState: any = {
  results: [
    {image: { src: "https://placekitten.com/g/180/180", alt: "1" }, price: "$ 1980", data: { description: "Apple Ipod touch 5g 16 gb Negro", status: "Igual A Nuevo Completo Único!" }, location: "Bogotá"},
    {image: { src: "https://placekitten.com/180/180", alt: "2" }, price: "$ 720", data: { description: "Apple Ipod touch 5g 16 gb Negro", status: "Igual A Nuevo Completo Único!" }, location: "Medellín"},
    {image: { src: "https://placekitten.com/g/180/180", alt: "3" }, price: "$ 3600", data: { description: "Apple Ipod touch 5g 16 gb Negro", status: "Igual A Nuevo Completo Único!" }, location: "Cartagena"},
    {image: { src: "https://placekitten.com/180/180", alt: "4" }, price: "$ 1560", data: { description: "Apple Ipod touch 5g 16 gb Negro", status: "Igual A Nuevo Completo Único!" }, location: "Cali"},
  ],
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
    default:
      return {
        ...state,
      };
  }
};

export default itemsReducer;
