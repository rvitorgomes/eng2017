import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

class UserModel {
  id: string;
  name: string;
  picture: string;
}

const url = 'https://coolpons-api.herokuapp.com/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private userMock: UserModel = {
    id: '1',
    name: 'Rubens Gomes',
    picture: 'placeholde.it/300x300'
  };

  getUser(id): Promise<UserModel> {
    return this
    .http
    .get(url + '/users/' + id)
    .toPromise()
    .then(res => res.json())
    .catch(error => this.handleError(error));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUserMock() {
    return this.userMock;
  }

  constructor(private http: Http) {}
}

