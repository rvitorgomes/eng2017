import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from './product-model';

@Component({
  selector: 'app-product-card',
  template: `
  <div class="product-card" *ngIf="product">
    <div class="card sticky-action">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="{{ imageUrl }}">
      </div>

      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
        {{ product.title }}
        <i class="material-icons right">more_vert</i></span>
        <p>{{ product.description }}</p>
      </div>

      <div class="card-action">
        <a href="{{ product.product_url }}"><i class="material-icons" style="padding-right: 12px">add_shopping_cart</i>Adicionar ao carrinho</a>
      </div>

      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{ title }}<i class="material-icons right">close</i></span>
        <p>{{ product.details }}</p>
      </div>
    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

  @Input() product: ProductModel;

  @Output() addToCart = new EventEmitter();

  get imageUrl() {
    return this.product.picture ? this.product.picture : 'http://materializecss.com/images/office.jpg';
  }

}
