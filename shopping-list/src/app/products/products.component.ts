import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.fetchProducts();
  }

}
