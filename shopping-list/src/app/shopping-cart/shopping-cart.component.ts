import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: 'shopping-cart.component.html',
  styleUrls: ['shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: Map<Product, number> = null;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.items = this.shoppingCartService.getItems();
  }

}
