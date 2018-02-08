import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'app/services/cookie.service';

import 'rxjs/add/operator/toPromise';
const url = 'https://coolpons-api.herokuapp.com/api';

export class UserModel {
  user_id: number;
  name: string;
  email: string;
  picture: string;
  birthdate: number;
}

@Injectable()
export class UserService {

  public user: UserModel;

  public setUserFromCookie(): Promise<UserModel> {
    const cookie_raw = this.CookieService.getCookie('auth');

    if (!cookie_raw) return Promise.resolve(new UserModel);

    console.log('raw', cookie_raw);
    const user_cookie = JSON.parse(cookie_raw);

    if (user_cookie && user_cookie.user_id) {
      console.log('Cookie found');
      return this.fetchUser(user_cookie.user_id).then(user => this.user = user);
    } else {
      // when its a first contact with the page
      console.log('Cookie not found');
      this.CookieService.setCookie('auth', { user_id: 0}, 365);
      return this.fetchUser(0).then(user => this.user = user);
    }
  }

  public fetchUser(id): Promise<UserModel> {
    if (!id) return Promise.resolve(new UserModel());

    return this
    .http
    .get(`${url}/users/${id}`)
    .toPromise()
    .then(res => res.json())
    .catch(error => this.handleError(error));
  }

  public createUser({ name, email, picture = undefined, birthdate = undefined }): Promise<UserModel> {
    return this
    .http
    .post(url + '/users', {
      name, picture, email
    })
    .toPromise()
    .then(res => res.json())
    .catch(error => this.handleError(error));
  }

  public getUser(): Promise<UserModel> {
    if (this.user)
      return Promise.resolve(this.user);
    else return this.setUserFromCookie();
  }

  public handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.resolve(undefined);
  }

  constructor(private http: Http, private CookieService: CookieService) {}

}

