import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { ProductService } from '../services/product-service';
import { ProductModel } from '../product/product-model';

import { Store, select } from '@ngrx/store';
import * as fromRoot from 'app/core';
import * as user from 'app/core/actions';
import { debounce } from 'lodash';

@Component({
  selector: 'app-layout',
  template: `
  <app-toolbar></app-toolbar>

  <div class="app-content container">
    <div class="row">
      <div class="col s3">
        <app-product-filters
          [search]="search"
          (searchChange)="searchProduct($event)"
        ></app-product-filters>
      </div>

      <div class="col s9">
          <app-product-list
            [loading]="loading"
            [products]="products"
            (addToCart)="addToCart($event)"
          ></app-product-list>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
  `
})
export class LayoutComponent implements AfterViewInit, OnInit {

  public search: string;
  public products: ProductModel[];
  public loading: boolean;

  searchProduct = debounce(this._searchProduct, 300);

  private user$ = this.store.pipe(select(fromRoot.getUser));

  private cart$ = this.store.pipe(select(fromRoot.getCart));

  _searchProduct(query) {
      this.ProductService.search(query).then(res => (this.products = res)).catch(err => (this.products = []));
  }

  ngAfterViewInit() {
    this.searchProduct({ query: 'Uber' });
  }

  addToCart(product) {
    console.log(product);
    this.store.dispatch(new user.CartAdd(product));
  }

  ngOnInit() {
    this.store.dispatch(new user.Load());
  }

  constructor(
    private store: Store<fromRoot.State>,
    private ProductService: ProductService
  ) {}

}
