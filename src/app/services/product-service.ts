import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ProductModel } from '../product/product-model';

const url = 'https://coolpons-api.herokuapp.com/api';
const localurl = 'http://localhost:3000/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private currentSearch: any = {};

  public fetchAll(): Promise<ProductModel[]> {
    return this
    .http
    .get(url + '/products/')
    .toPromise()
    .then(res => res.json())
    .catch(error => this.handleError(error));
  }

  public addToCart(id): Promise<any> {
    return this
    .http
    .post(url + '/shop/', { id })
    .toPromise()
    .then(res => res.json())
    .catch(error => this.handleError(error));
  }

  public search(payload): Promise<ProductModel[]> {
    const query = Object.assign({}, this.currentSearch, payload);
    this.currentSearch = query;

    return this.queryProducts(query);
  }

  public queryProducts({ query, company, price }) {
    return this
    .http
    .post(url + '/products/search', { query, company, price })
    .toPromise()
    .then(res => res.json())
    .catch(error => this.handleError(error));
  }

  // Error handler
  public handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {}
}

