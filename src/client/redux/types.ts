import {
  Action,
  PayloadAction,
  TypeConstant,
} from "typesafe-actions";

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
  PayloadAction<TypeConstant, TPayload> { }

export interface IApplicationState {
  itemsLoader: boolean;
  items: {
    results: IResultItem[],
    currentItem: IResultItem,
  }
}

export interface IResultItem {
  id: string;
  image: { 
    src: string;
    alt: string;
  };
  price: string;
  freeShipping: boolean;
  currencyId: string;
  data: {
    description: string;
    status: string;
  };
  location: string;
};

export interface IResultCollection {
  results: IResultItem[];
};
