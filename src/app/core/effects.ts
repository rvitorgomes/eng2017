import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import {
  Load,
  LoadFail,
  LoadSuccess,
  ProductsLoad,
  ProductsLoadSuccess,
  ProductsSearch,
  ProductsSearchSuccess,
  CartAdd,
  CartLoad,
  CartLoadSuccess,
  Buy,
  CollectionActions,
  CollectionActionTypes
 } from 'app/core/actions';

import { UserService, UserModel } from 'app/services/user-service';
import { CookieService } from 'app/services/cookie.service';
import { ProductService } from 'app/services/product-service';
import { SalesService } from 'app/services/sales.service';
import {
  switchMap,
  toArray,
  map,
  catchError,
  mergeMap,
  filter,
  tap,
  retry,
  withLatestFrom
} from 'rxjs/operators';

import { pull } from 'lodash';

import * as fromRoot from 'app/core';

@Injectable()
export class CollectionEffects {

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.Load),
    map(() => this.CookieService.getCookie('auth')),
    tap((cookie: string) => {
      if (cookie) return cookie;
      else return of(this.CookieService.setCookie('auth', {
        user_id: Math.floor(Math.random() * Math.pow(10, 6)),
        name: '',
        cart: []
        }, 365)
      );
    }),
    filter((cookie: string) => cookie && JSON.parse(cookie)),
    map(cookie => JSON.parse(cookie).user_id),
    mergeMap(id => this.UserService.fetchUser(id)),
    map((user: UserModel) => new LoadSuccess(user))
  );

  @Effect()
  productsLoad$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.ProductsLoad),
    mergeMap(() => this.ProductService.fetchAll()),
    map(products => new ProductsLoadSuccess(products))
  );

  @Effect()
  cartLoad$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.CartLoad),
    map(() => this.CookieService.getCookie('auth')),
    filter((cookie: string) => (cookie && JSON.parse(cookie))),
    map(cookie => JSON.parse(cookie).cart),
    tap(cart => console.log(cart)),
    map(cart => new CartLoadSuccess(cart))
  );

  @Effect({ dispatch: false })
  cartAddCookies$ = this.actions$.pipe(
    ofType(CollectionActionTypes.CartAdd),
    map((action: any) => action.payload),
    map((product) => {
      const cookie = JSON.parse(this.CookieService.getCookie('auth'));
      if (!cookie) return;
      const current_cart = cookie.cart;
      const cart = (current_cart || []).concat(product);
      return this.CookieService.setCookie('auth', {
        ...cookie,
        cart
      }, 365);
    })
  );

  @Effect({ dispatch: false })
  cartRemoveCookies$ = this.actions$.pipe(
    ofType(CollectionActionTypes.CartRemove),
    map((action: any) => action.payload),
    map((product) => {
      const cookie = JSON.parse(this.CookieService.getCookie('auth'));
      if (!cookie) return;

      const cart = cookie.cart;
      const index = cart.findIndex(item => item.id === product.id);

      if (index !== -1) {
        cart.splice(index, 1);
      }

      return this.CookieService.setCookie('auth', Object.assign({ }, cookie, { cart }), 365);
    })
  );

  @Effect({ dispatch: false })
  userUpdate$ = this.actions$.pipe(
    ofType(CollectionActionTypes.UserUpdate),
    map((action: any) => action.payload),
    map((user) => {
      const cookie = JSON.parse(this.CookieService.getCookie('auth'));
      if (!cookie) return;

      this.CookieService.setCookie('auth', Object.assign({ }, cookie, ...user), 365);
      return user;
    }),
    map(user => new user.LoadSuccess(user))
  );

  constructor(
    private actions$: Actions,
    private UserService: UserService,
    private CookieService: CookieService,
    private ProductService: ProductService,
    private SalesService: SalesService,
    private store: Store<fromRoot.State>
  ) {}
}
