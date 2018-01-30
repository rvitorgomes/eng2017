import { Injectable } from '@angular/core';

import * as Cookies from "js-cookie";

@Injectable()
export class CookieService {

  public setCookie(name: string, value: any, days_to_expire: number) {
    Cookies.set(name, value, {
      expires: days_to_expire
    });
  }

  public getCookie(name: string) {
    return Cookies.get(name);
  }

  public checkCookie(name: string) {
    return !!this.getCookie(name);
  }

}

