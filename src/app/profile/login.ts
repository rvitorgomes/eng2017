import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-panel hoverable">
        <div class="card-panel z-depth-2">
          <div class="teal-text lighten-1">
            <h2 class="center-align">Coolpons</h2>
          </div>
          <form>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text">
                  <label for="icon_prefix">Usuário</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">lock</i>
                  <input id="icon_password" type="password">
                  <label for="icon_password">Senha</label>
                </div>
              </div>
              <div class="row input-field">
                <a class="btn waves-effect waves-light col s12 teal lighten-1" routerLink="app">Logar</a>
              </div>
          </form>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

}
