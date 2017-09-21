import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ProductModel, PRODUCTS_MOCK } from '../product/product-model';

export let PRODUCTS: ProductModel[] = PRODUCTS_MOCK;

const url = 'api/products';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  constructor(private http: Http) {}

  fetchAll(): Promise<ProductModel[]> {
    return this
      .http
      .get(url)
      .toPromise()
      .then(res => res.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getProducts() {
    return PRODUCTS;
  }

}

