import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  testProduct = new Product('Test', 'This is a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Package-Christmas-Gift-Present-Celebration-Holiday-1893642.jpg');

  constructor() { }

  ngOnInit() {
  }

}
