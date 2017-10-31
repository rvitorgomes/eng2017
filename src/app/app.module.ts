import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './layout/toolbar';
import { LayoutComponent } from './layout/layout';

import { ProductCardComponent } from './product/product-card';
import { ProductListComponent } from './product/product-list';
import { ProductFiltersComponent } from './product/product-filters';

import { LoginComponent } from './profile/login';
import { ProfileComponent } from './profile/profile';

import { ProductService } from './services/product-service';
import { UserService } from './services/user-service';

import { external } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LayoutComponent,
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
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'app',
        component: LayoutComponent
      },
      {
        path: 'app/profile',
        component: ProfileComponent
      },
      {
        path: '**',
        redirectTo: 'app',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
