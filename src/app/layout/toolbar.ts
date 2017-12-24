import { Component } from '@angular/core';

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
        <li><a routerLink="profile"><i class="material-icons right">person</i>Perfil</a></li>
      </ul>
    </div>
  </nav>
  `
})
export class ToolbarComponent {
}
