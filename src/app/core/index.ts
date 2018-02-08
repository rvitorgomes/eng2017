import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import * as fromUser from 'app/core/reducer';

export interface State {
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer
};

export const getUserState = createFeatureSelector<fromUser.State>('user');

export const getUserLoaded = createSelector(getUserState, fromUser.getLoaded);
export const getUserLoading = createSelector(getUserState, fromUser.getLoading);
export const getUser = createSelector(getUserState, fromUser.getUser);
export const getProducts = createSelector(getUserState, fromUser.getProducts);
export const getSearch = createSelector(getUserState, fromUser.getSearch);
export const getCart = createSelector(getUserState, fromUser.getCart);
export const getCartTotal = createSelector(getUserState, fromUser.getCartTotal);
