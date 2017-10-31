import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from './product-model';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="product-card card" *ngIf="product">

      <div class="card-image">
        <img src="{{ pictureMap[product.company] ? pictureMap[product.company] : 'http://materializecss.com/images/office.jpg' }}">
      </div>

      <div class="card-content">
        <span class="card-title grey-text text-darken-4">
          {{ product.name }}
        </span>
        <p>{{ companyMap[product.company] ? companyMap[product.company] : product.company }}</p>
        <p *ngIf="product.price_discount"> Desconto de <span class="red-text accent-4">R$ {{ product.price_discount }},00</span></p>
        <p *ngIf="!product.price_discount"> Sem Descontos</p>
      </div>

      <div class="card-action">
        <a href="{{ product.product_url }}">
          <span class="product-price left">R$ {{ product.price }},00</span>
          <span class="right"><a routerLink="profile">Resgatar</a></span>
        </a>
      </div>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

  @Input() product: ProductModel;

  @Output() addToCart = new EventEmitter();

  public companyMap = ['Uber', 'Cabify', '99 Taxis', 'Ingresso.com'];
  public pictureMap = [
    'https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.2/d1a3f4spazzrp4.cloudfront.net/images/uber-serp-logo-f6e7549c89.jpg',
    'https://thumb.lovemondays.com.br/image/f526275cf94944e0a92fc57022592889/logos/f430b2/cabify.png',
    'http://0800telefone.com/wp-content/uploads/2017/06/99-taxis-logo-2-500x276.png',
    'https://adrenaline.uol.com.br/files/upload/noticias/2013/11/risastoider/ingresso.png'
  ];

  get imageUrl() {
    return this.product.picture ? this.product.picture : 'http://materializecss.com/images/office.jpg';
  }

}
