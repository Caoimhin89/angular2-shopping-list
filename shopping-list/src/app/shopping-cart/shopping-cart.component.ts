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
  selectedItem: Product = null;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.items = this.shoppingCartService.getItems();
  }

  onSelectItem(item: Product) {
    this.selectedItem = item;
  }

  removeItem(item: Product) {
    this.shoppingCartService.removeSingleUnit(item);
  }

  removeAll(item: Product) {
    this.shoppingCartService.removeAllUnits(item);
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }

}
