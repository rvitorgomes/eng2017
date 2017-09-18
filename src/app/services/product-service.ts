import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ProductModel, PRODUCTS_MOCK } from '../product/product-model';

export const PRODUCTS: ProductModel[] = PRODUCTS_MOCK;

@Injectable()
export class ProductService {

  constructor(private http: Http) {}

  getProducts() {
    return PRODUCTS;
  }

}

