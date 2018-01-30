import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './layout/toolbar';
import { LayoutComponent } from './layout/layout';
import { FooterComponent } from './layout/footer';

import { ProductCardComponent } from './product/product-card';
import { ProductListComponent } from './product/product-list';
import { ProductFiltersComponent } from './product/product-filters';

import { LoginComponent } from './profile/login';
import { ProfileComponent } from './profile/profile';

import { ProductService } from './services/product-service';
import { UserService } from './services/user-service';
import { CookieService } from './services/cookie.service';

// import { external } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LayoutComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductFiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: LayoutComponent,
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'app',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    CookieService,
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
