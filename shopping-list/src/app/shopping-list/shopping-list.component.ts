import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Map<Product, number> = null;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.items = this.shoppingCartService.getItems();
  }

}
