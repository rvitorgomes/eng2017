import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  template: `
    <div class="product-filters card-panel">
        <div class="panel-title"><h5>Buscar descontos</h5></div>
        <div>
          <div class="input-field">
          <input
            placeholder="Pesquisar descontos"
            id="filter"
            [ngModel]="search"
            (ngModelChange)="searchChange.next({ query : $event })"
          >
          <label for="filter"></label>
        </div>
        </div>
        <div>
          <p class="range-field">
            <label for="range">Preço</label>
            <input
              type="range"
              id="range"
              min="0"
              max="100"
              [ngModel]="search_price"
              (ngModelChange)="searchChange.next({ price: $event })"
            />
          </p>
        </div>
        <div>
          <label>Empresas</label>
            <p>
              <input type="checkbox" id="check-1" [ngModel]="false" (ngModelChange)="searchChange.next({ company: 0 })" />
              <label for="check-1">Uber</label>
            </p>
            <p>
              <input type="checkbox" id="check2" [ngModel]="false" (ngModelChange)="searchChange.next({ company: 1 })" />
              <label for="check2">Cabify</label>
            </p>
            <p>
              <input type="checkbox" id="check3" [ngModel]="false" (ngModelChange)="searchChange.next({ company: 2 })" />
              <label for="check3">99 Taxis</label>
            </p>
            <p>
              <input type="checkbox" id="check4" [ngModel]="false" (ngModelChange)="searchChange.next({ company: 3 })" />
              <label for="check4">Ingresso.com</label>
            </p>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFiltersComponent {

  @Input() search: string;

  @Input() price_search: number;

  @Output() searchChange: EventEmitter<string> = new EventEmitter();

}
