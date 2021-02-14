import {
  Action,
  PayloadAction,
  TypeConstant,
} from "typesafe-actions";

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
  PayloadAction<TypeConstant, TPayload> { }

export interface IApplicationState {
  items: {
    results: IResultItem[],
    currentItem: IResultItem,
  }
}

export interface IResultItem {
  image: { 
    src: string;
    alt: string;
  };
  price: string;
  data: {
    description: string;
    status: string;
  };
  location: string;
};

export interface IResultCollection {
  results: IResultItem[];
};
