import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { ProductService } from "../services/product-service";
import { ProductModel } from "./product-model";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="row flex">
      <div *ngFor="let product of products_lists$ | async">
        <app-product-card
          [product]="product"
        ></app-product-card>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  private products_lists$: Observable<ProductModel[]> = Observable.of(this.ProductService.getProducts());

  constructor(private ProductService: ProductService) { }

}
