import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

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
        ></app-product-card>
      </div>
    </div>

    <ul class="pagination" *ngIf="!loading && products?.length">
      <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
      <li class="active"><a href="#!">1</a></li>
      <li class="waves-effect"><a href="#!">2</a></li>
      <li class="waves-effect"><a href="#!">3</a></li>
      <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
    </ul>

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

  ngOnChanges() {
    console.log(this.products);
  }

}
