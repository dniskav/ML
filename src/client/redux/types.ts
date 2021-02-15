import {
  Action,
  PayloadAction,
  TypeConstant,
} from "typesafe-actions";

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
  PayloadAction<TypeConstant, TPayload> { }

export interface IApplicationState {
  miscellaneous: {
    itemsLoader: boolean;
    BreadCrumbs: {
      bName: string,
      bUrl: string,
    },
  },
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
export interface ICurrentItem {
  condition: string;
  price: string;
  sold_quantity: string;
  title: string;
  pictures: any[];
  currency_id: string;
  description: string;
};
