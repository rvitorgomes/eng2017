import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ProductModel } from '../product/product-model';

const url = 'https://coolpons-api.herokuapp.com/api';
const localurl = 'http://localhost:3000/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private currentSearch: any = {};

  fetchAll(): Promise<ProductModel[]> {
    return this
    .http
    .get(localurl + '/products/')
    .toPromise()
    .then(res => res.json())
    .catch(error => this.handleError(error));
  }

  addToCart(id): Promise<any> {
    return this
    .http
    .post(localurl + '/shop/', { id })
    .toPromise()
    .then(res => res.json())
    .catch(error => this.handleError(error));
  }

  search(payload): Promise<ProductModel[]> {
    const query = Object.assign({}, this.currentSearch, payload);
    this.currentSearch = query;

    return this.queryProducts(query);
  }

  queryProducts({ query, company, price }) {
    return this
    .http
    .post(localurl + '/products/search', { query, company, price })
    .toPromise()
    .then(res => res.json())
    .catch(error => this.handleError(error));
  }

  // Error handler
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {}
}

