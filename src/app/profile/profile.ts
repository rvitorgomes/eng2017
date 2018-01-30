import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService, UserModel } from 'app/services/user-service';
import { log } from 'util';

@Component({
  selector: 'app-profile',
  template: `
  <app-toolbar></app-toolbar>
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="../../assets/user-profile-bg.jpg">
          <span class="card-title">
            <img [src]="user?.picture" alt="" class="circle responsive-img">
            {{ user?.name }}
          </span>
        </div>

        <div class="card-content">
          <p>Nenhuma compra realizada.</p>
        </div>

        <div class="card-action">
          <a routerLink="app">Buscar Produtos</a>
        </div>
      </div>
    </div>
  </div>
  `
})
export class ProfileComponent implements OnInit {

  private user: UserModel;

  ngOnInit() {
    this.UserService.getUser().then(user => this.user = user);
  }

  constructor(private UserService: UserService) {}
}
