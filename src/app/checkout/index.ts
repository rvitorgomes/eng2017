import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService, UserModel } from 'app/services/user-service';

@Component({
  selector: 'app-checkout',
  template: `
  <app-toolbar></app-toolbar>
  <div class="row container">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">
            Suas compras
          </span>
        </div>

        <div class="card-action">
          <a>Finalizar Compra</a>
        </div>
      </div>
      <ul class="collection with-header">
        <li class="collection-item avatar">
          <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.2/d1a3f4spazzrp4.cloudfront.net/images/uber-serp-logo-f6e7549c89.jpg" alt="" class="circle">
          <span class="title">Corrida Uber</span>
          <p>R$ 40,00</p>
          <a href="#!" class="secondary-content"><i class="material-icons">delete</i></a>
        </li>
        <li class="collection-item">Corrida Uber</li>
        <li class="collection-item">Ingresso Cinema</li>
        <li class="collection-item">Rodizio Japonês</li>
      </ul>
    </div>
  </div>
  `
})
export class CheckoutComponent implements OnInit {

  private user: UserModel;

  ngOnInit() {
    this.UserService.getUser().then(user => this.user = user);
  }

  constructor(private UserService: UserService) {}
}
