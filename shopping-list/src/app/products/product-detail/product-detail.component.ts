import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ShoppingCartService } from '../../shopping-list/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() selectedProduct: Product;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  onAddToCart() {
    this.shoppingCartService.addItems(this.selectedProduct);
  }

}
