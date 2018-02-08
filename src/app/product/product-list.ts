import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'app/core';
import * as user from 'app/core/actions';
import { ProductModel } from "./product-model";

@Component({
  selector: 'app-product-list',
  styles: [`
    .preloader-wrapper {
      position: relative;
      top: 20vh;
      left: 50vh;
    }
  `],
  template: `
    <div class="row flex" *ngIf="products?.length">
      <div *ngFor="let product of products">
        <app-product-card
          [product]="product"
          (addToCart)="addToCart.next($event)"
        ></app-product-card>
      </div>
    </div>

    <!-- Loader when not products -->
    <div class="preloader-wrapper big active" *ngIf="loading">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  @Input() products: ProductModel[];
  @Input() loading: boolean;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();

}
