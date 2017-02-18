import { Component, OnInit } from '@angular/core';
import {Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  selectedProduct: Product;

  constructor() { }

  ngOnInit() {
  }

}
