import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ProductModel } from '../product/product-model';

const url = 'https://coolpons-api.herokuapp.com/api';
const localurl = 'http://localhost:3000/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  constructor(private http: Http) {}

  fetchAll(): Promise<ProductModel[]> {
    return this
      .http
      .get(url + '/products/')
      .toPromise()
      .then(res => res.json())
      .catch(error => this.handleError(error));
  }

  search(query): Promise<ProductModel[]> {
    return this
      .http
      .post(localurl + '/products/search', query)
      .toPromise()
      .then(res => res.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // Remove on production
    return Promise.reject(error.message || error);
  }

}

