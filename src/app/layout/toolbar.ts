import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'app/core';
import * as user from 'app/core/actions';

@Component({
  selector: 'app-toolbar',
  template: `
  <div class="navbar-fixed">
  <nav class="primary-color">
    <div class="nav-wrapper">
      <a routerLink="app" class="brand-logo">
        <i class="material-icons left" style="padding-left: 24px">shopping_cart</i>
        <span>Coolpons</span>
      </a>
      <ul class="right hide-on-med-and-down">
        <li>
          <a routerLink="/comprar">
          Carrinho
            <i class="material-icons right" *ngIf="!(cart$ | async)?.length">add_shopping_cart</i>
            <span class="new badge" *ngIf="(cart$ | async)?.length">{{ (cart$ | async)?.length }}</span>
          </a>
        </li>
        <li *ngIf="!(user$ | async)?.name"><a routerLink="profile"><i class="material-icons right">person</i>Minha Conta</a></li>
        <li *ngIf="(user$ | async)?.name"><a routerLink="profile"><i class="material-icons right">person</i>Olá {{ (user$ | async)?.name }}</a></li>
      </ul>
    </div>
  </nav>
  `
})
export class ToolbarComponent implements OnInit {

  private cart$ = this.store.pipe(select(fromRoot.getCart));

  private user$ = this.store.pipe(select(fromRoot.getUser));

  ngOnInit() {
    this.store.dispatch(new user.Load());
  }

  constructor(private store: Store<fromRoot.State>) {}
}
