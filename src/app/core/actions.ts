import { Action } from '@ngrx/store';

export enum CollectionActionTypes {
  Load = '[Collection] Load',
  LoadSuccess = '[Collection] Load Success',
  LoadFail = '[Collection] Load Fail',
  ProductsLoad = '[Products] Load',
  ProductsLoadSuccess = '[Products] Load Success',
  ProductsLoadFail = '[Products] Load Success Fail',
  ProductsSearch = '[Products] Search',
  CartLoad = '[Cart] Load',
  CartLoadSuccess = '[Cart] Load Success',
  CartAdd = '[Cart] Add',
  CartRemove = '[Cart] Remove',
  UserUpdate = '[User] Update',
  Buy = '[User] Buy',
}

/**
 * Load Collection Actions
 */

export class Load implements Action {
  readonly type = CollectionActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CollectionActionTypes.LoadSuccess;

  constructor(public payload: any) {}
}

export class UserUpdate implements Action {
  readonly type = CollectionActionTypes.UserUpdate;

  constructor(public payload: any) {}
}

export class LoadFail implements Action {
  readonly type = CollectionActionTypes.LoadFail;

  constructor(public payload: any) {}
}

export class ProductsLoad implements Action {
  readonly type = CollectionActionTypes.ProductsLoad;
}

export class ProductsLoadSuccess implements Action {
  readonly type = CollectionActionTypes.ProductsLoadSuccess;

  constructor(public payload: any) {}
}

export class ProductsSearch implements Action {
  readonly type = CollectionActionTypes.ProductsSearch;

  constructor(public payload: string) {}
}

export class ProductsSearchSuccess implements Action {
  readonly type = CollectionActionTypes.ProductsSearch;

  constructor(public payload: any) {}
}

export class CartLoad implements Action {
  readonly type = CollectionActionTypes.CartLoad;
}

export class CartLoadSuccess implements Action {
  readonly type = CollectionActionTypes.CartLoadSuccess;

  constructor(public payload: any) {}
}

export class CartAdd implements Action {
  readonly type = CollectionActionTypes.CartAdd;

  constructor(public payload: any) {}
}

export class CartRemove implements Action {
  readonly type = CollectionActionTypes.CartRemove;

  constructor(public payload: any) {}
}

export class Buy implements Action {
  readonly type = CollectionActionTypes.Buy;

  constructor(public payload: any) {}
}

export type CollectionActions =
  | Load
  | LoadSuccess
  | LoadFail
  | ProductsLoad
  | ProductsLoadSuccess
  | ProductsSearch
  | ProductsSearchSuccess
  | CartLoad
  | CartLoadSuccess
  | CartAdd
  | CartRemove
  | UserUpdate
  | Buy;
