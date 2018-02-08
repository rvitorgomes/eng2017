import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'app/services/cookie.service';
import { ProductModel } from '../product/product-model';

const url = 'https://coolpons-api.herokuapp.com/api';
const localurl = 'http://localhost:3000/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SalesService {


    public buyItem(product, user_id) {
        var today = new Date();
        let id = this.getRandomInt(0, 1000);
        var today = new Date();

        return this
        .http
        .post(url + '/sales/', {id: id, date:today, userId: user_id, price: product.price, idProduto: product.id})
        .toPromise()
        .then(res => {
            res.json();
            console.log(res);
        })
        .catch(error => this.handleError(error));
    }

    public getItensFromUser(id){
        return this
        .http
        .get(url + '/sales/'+id)
        .toPromise()
        .then(res => res.json())
        .catch(error => this.handleError(error));
    }

      // Error handler
  public handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  constructor(private http: Http,
    private CookieService: CookieService,) {}
}
