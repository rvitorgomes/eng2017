import { Component, AfterViewInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'app/core';
import * as user from 'app/core/actions';
import { SalesService } from 'app/services/sales.service';
import { CookieService } from 'app/services/cookie.service';

declare var jquery:any;   // not required
declare var $ :any;

@Component({
  selector: 'app-checkout',
  template: `
  <app-toolbar></app-toolbar>
  <div class="row container">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title" style="display: flex; justify-content: space-between;">
            <div>Suas compras</div>
            <div *ngIf="cartTotal$ | async">Total: R$ {{ cartTotal$ | async }},00</div>
          </span>
        </div>

        <div class="card-action">
          <!-- <a style="cursor: pointer" (click)="buy()">Finalizar Compra</a>-->

          <!-- Modal Trigger -->
          <!-- <a class="waves-effect waves-light btn modal-trigger" data-ref="#modal1">Finalizar Compra</a> -->
          <button data-target="modal1" class="btn modal-trigger">Finalizar Compra</button>
        </div>
      </div>
      <div class="center" *ngIf="!(cart$ | async)?.length">Nenhum item no carrinho</div>
      <ul class="collection with-header" *ngIf="(cart$ | async)?.length">
        <li *ngFor="let item of (cart$ | async); let i = index" class="collection-item avatar">
          <img [src]="item.picture" alt="" class="circle">
          <span class="title">{{item.name}}</span>
          <p>R$ {{item.price}}</p>
          <a style="cursor: pointer" (click)="removeItem(item)" class="secondary-content" ><i class="material-icons">delete</i></a>
        </li>
      </ul>
    </div>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <form #Biling (ngSubmit)="buy()">
      <div class="modal-content">
        <h4>Complete suas informações</h4>
        <div>
            <div class="input-field">
              <input
                name="name"
                placeholder="Nome"
                id="name"
                [ngModel]="(user$ | async)?.name"
                (ngModelChange)="form.name"
              >
            </div>
            <div class="input-field">
              <input
                name="email"
                type="email"
                placeholder="Email"
                id="email"
                [ngModel]="(user$ | async)?.email"
                (ngModelChange)="form.email"
              >
            </div>
            <div class="input-field">
            <input
              name="creditcard"
              placeholder="Cartão de Crédito"
              id="creditcard"
              [ngModel]="(user$ | async)?.credit_card"
              (ngModelChange)="form.credit_card"
            >
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn waves-effect waves-light modal-close" type="submit" name="action" (click)="goToHome()">
          Finalizar Compra
          <i class="material-icons right">send</i>
        </button>
      </div>
      </form>
  </div>
  `
})
export class CheckoutComponent implements OnInit, AfterViewInit {

  private form = {};

  private user$ = this.store.pipe(select(fromRoot.getUser));
  private cart$ = this.store.pipe(select(fromRoot.getCart));
  private cartTotal$ = this.store.pipe(select(fromRoot.getCartTotal));

  removeItem(item) {
    this.store.dispatch(new user.CartRemove(item));
  }

  buy() {
    console.log(this.form);
    this.store.dispatch(new user.UserUpdate(this.form));

    const auth = this.CookieService.getCookie('auth');

    const user_data = auth ? JSON.parse(auth) : { user_id : 0 };

    const cart = user_data.cart;
    console.log(cart);

    for (let index = 0; index < cart.length; index++) {
      const product = cart[index];
      this.SalesService.buyItem(product, user_data.user_id);
    }

  }

  ngOnInit() {
    this.store.dispatch(new user.Load());
    this.store.dispatch(new user.CartLoad());
  }

  ngAfterViewInit() {
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }

  goToHome() {
    window.location.assign('/app');
  }

  constructor(private store: Store<fromRoot.State>, private SalesService: SalesService, private CookieService: CookieService) {}
}
