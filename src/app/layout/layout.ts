import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { ProductService } from '../services/product-service';
import { ProductModel } from '../product/product-model';

const debounce = require("lodash").debounce;

@Component({
  selector: 'app-layout',
  template: `
  <app-toolbar></app-toolbar>

  <div class="app-content">
    <div class="row">
      <div class="col s3">
        <app-product-filters
          [search]="search"
          (searchChange)="searchByText($event)"
        ></app-product-filters>
      </div>

      <div class="col s9">
          <app-product-list
            [loading]="loading"
            [products]="products"
          ></app-product-list>
      </div>
    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

  // Smart component

  public search: string;
  public products: ProductModel[];
  public loading: boolean;


  searchByText(query) {
      this.ProductService.search({ query }).then(res => (this.products = res)).catch(err => (this.products = []));
  }

  searchByRange(price_min, price_max) {
    this.ProductService.search({ price_min, price_max });
  }

  searchByCompany(company_id) {
    this.ProductService.search({ company_id });
  }

  constructor(private ProductService: ProductService) {}

}
