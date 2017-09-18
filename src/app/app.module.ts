import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './layout/toolbar';
import { ProductCardComponent } from './product/product-card';
import { ProductListComponent } from './product/product-list';
import { ProductFiltersComponent } from './product/product-filters';
import { ProductService } from './services/product-service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductFiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
