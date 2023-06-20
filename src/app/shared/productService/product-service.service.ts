import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}

  getProductsData() {
    return [
      {
        name: 'Credito',
        key: 'Credito',
      },
      {
        name: 'Hipoteca',
        key: 'Hipoteca',
      },
    ];
  }
}
