import { Component } from '@angular/core';
import { UserService, UserModel } from 'app/services/user-service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
        <li><a routerLink="checkout"><i class="material-icons right">add_shopping_cart</i>Carrinho</a></li>
        <li *ngIf="!user"><a routerLink="profile"><i class="material-icons right">person</i>Minha Conta</a></li>
        <li *ngIf="user && user.name"><a routerLink="profile"><i class="material-icons right">person</i>Olá {{ user?.name }}</a></li>
      </ul>
    </div>
  </nav>
  `
})
export class ToolbarComponent implements AfterViewInit {

  private user: UserModel;

  ngAfterViewInit() {
    this.UserService.getUser().then(user => {
      this.user = user;
    });
  }

  constructor(private UserService: UserService) {}
}
