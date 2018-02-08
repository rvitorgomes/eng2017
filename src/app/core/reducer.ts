import { pull } from "lodash";

import {
  CollectionActionTypes,
  CollectionActions,
} from './actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  user: any;
  products: any;
  search: any;
  cart: any;
}

const initialState: State = {
  loaded: false,
  loading: false,
  user: {},
  products: [],
  search: {},
  cart: []
};

export function reducer(
  state = initialState,
  action: CollectionActions
): State {
  switch (action.type) {
    case CollectionActionTypes.Load: {
      return {
        ...state,
        loading: true,
      };
    }

    case CollectionActionTypes.LoadSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        user: action.payload,
      };
    }

    case CollectionActionTypes.ProductsLoadSuccess: {
      console.log('products', action.payload);
      return {
        ...state,
        loaded: true,
        loading: false,
        products: action.payload
      };
    }

    case CollectionActionTypes.ProductsSearch: {
      console.log('search', action.payload);
      return {
        ...state,
        search: action.payload
      };
    }

    case CollectionActionTypes.CartLoadSuccess: {
      console.log('cart', action.payload);
      return {
        ...state,
        cart: action.payload
      };
    }

    case CollectionActionTypes.CartAdd: {
      const updated_cart = (state.cart || []).concat(action.payload);
      return {
        ...state,
        cart: updated_cart
      };
    }

    case CollectionActionTypes.CartRemove: {
      const updated_cart = pull(state.cart, action.payload);
      return {
        ...state,
        cart: state.cart
      };
    }

    case CollectionActionTypes.UserUpdate: {
      return {
        ...state,
        user: action.payload
      };
    }

  }
};

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getUser = (state: State) => state.user;

export const getProducts = (state: State) => state.products;

export const getSearch = (state: State) => state.search;

export const getCart = (state: State) => state.cart;

export const getCartTotal = (state: State) => state.cart.map(item => item.price).reduce((a, b) => (a || 0) + (b || 0));
