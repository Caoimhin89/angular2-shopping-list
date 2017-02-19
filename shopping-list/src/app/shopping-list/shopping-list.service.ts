import { Injectable } from '@angular/core';
import { Inclusion } from '../shared/inclusion';

@Injectable()
export class ShoppingListService {
  private items: Map<string, number> = new Map;

  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(item: Inclusion) {
    if(this.isAlreadyInCart(item.name)) {
      this.items.set(item.name, this.getCurrentQuantity(item.name) + item.quantity);
    } else {
      this.items.set(item.name, item.quantity);
    }
    console.log("Item added to shopping-list! : " + item.name + " : " + item.quantity);
  }


  // Sub-Routines

  isAlreadyInCart(item: string) : boolean {
    if(this.items.has(item)) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentQuantity(item: string) : number {
    return this.items.get(item);
  }

}
