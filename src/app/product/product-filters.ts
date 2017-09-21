import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  template: `
    <div class="product-filters">
        <div>
          <div class="input-field">
          <input placeholder="Por quais descontos procura ?" id="filter" type="text">
          <label for="filter">Buscar</label>
        </div>
        </div>
        <div>
          <p class="range-field">
            <label for="range">Preço</label>
            <input type="range" id="range" min="0" max="1000" />
          </p>
        </div>
        <div>
          <label>Empresas</label>
            <p>
              <input type="checkbox" id="check-1" />
              <label for="check-1">Uber</label>
            </p>
            <p>
              <input type="checkbox" id="check2" />
              <label for="check2">Cabify</label>
            </p>
            <p>
              <input type="checkbox" id="check3" />
              <label for="check3">99 Taxis</label>
            </p>
            <p>
              <input type="checkbox" id="check4" />
              <label for="check4">Ingresso.com</label>
            </p>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFiltersComponent {

}
