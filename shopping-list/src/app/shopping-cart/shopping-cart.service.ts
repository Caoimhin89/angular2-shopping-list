import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable()
export class ShoppingCartService {
  private items: Map<Product, number> = new Map();

  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(item: Product) {
    if(this.isAlreadyInCart(item)) {
      this.items.set(item, this.getCurrentQuantity(item) + 1);
    } else {
      this.items.set(item, 1);
    }
    console.log("Item added! : " + item.name);
  }

  removeSingleUnit(item: Product) {
    this.items.set(item, this.getCurrentQuantity(item) - 1);
  }

  removeAllUnits(item: Product) {
    this.items.delete(item);
  }

  clearCart() {
    this.items.clear();
  }


  // Sub-Routines

  isAlreadyInCart(item: Product) : boolean {
    if(this.items.has(item)) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentQuantity(item: Product) : number {
    return this.items.get(item);
  }

}
