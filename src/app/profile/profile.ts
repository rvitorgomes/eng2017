import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { UserService } from "app/services/user-service";

class UserModel {
  id: string;
  name: string;
  picture: string;
}

@Component({
  selector: 'app-profile',
  template: `
  <app-toolbar></app-toolbar>
  <div class="row" *ngIf="user">
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="../../assets/user-profile-bg.jpg">
          <span class="card-title">
            <img [src]="user.picture" alt="" class="circle responsive-img">
            {{ user.name }}
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  @Input() user: UserModel;

  ngOnInit() {
    this.user = this.UserService.getUserMock();
  }

  constructor(private UserService: UserService) {}

}
