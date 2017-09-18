import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
  <div class="navbar-fixed">
  <nav class="primary-color">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><i class="material-icons left" style="padding-left: 24px">shopping_cart</i>Engenharia 2017</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html"><i class="material-icons right">search</i>Buscar</a></li>
        <li><a href="badges.html"><i class="material-icons right">person</i>Perfil</a></li>
      </ul>
    </div>
  </nav>
  `
})
export class ToolbarComponent {
}
