import { Injectable } from '@angular/core';
import { ShoppingList } from './shopping-list';
import { Product } from '../products/product';
import { Purchase } from '../shared/purchase';

@Injectable()
export class ShoppingListService {
  private shoppingLists: Map<string, ShoppingList> = new Map();

  constructor() { }

  getShoppingLists() {
    return this.shoppingLists;
  }

  getItemsFromList(listId: string) : Purchase[] {
    return this.shoppingLists.get(listId).getPurchasesArray();
  }

  addItemToList(listId: string, item: Product, quantity: number) {
    if(this.isNewList(listId)) {
      this.createNewShoppingList(listId);
    }
    if(this.isNotEmptyList(listId)) {
      if(this.isAlreadyInList(listId, item)) {
        this.shoppingLists.get(listId).getPurchases().get(item.name).addMultipleUnits(quantity);
      } else {
        this.shoppingLists.get(listId).getPurchases().set(item.name, new Purchase(item, quantity));
      }
      console.log("Item added to shopping-list! : " + item.name + " : " + quantity);
    } else {
      this.shoppingLists.get(listId).addNewPurchase(new Purchase(item, quantity));
    }
  }


  // Sub-Routines

  isNewList(listId: string): boolean {
    return this.shoppingLists.has(listId);
  }

  createNewShoppingList(listId: string) {
    let newList: ShoppingList = new ShoppingList(listId, new Map());
    this.shoppingLists.set(listId, newList);
  }

  isAlreadyInList(listId: string, item: Product) : boolean {
    for(let purchase of this.shoppingLists.get(listId).getPurchasesArray()) {
      if(purchase.getProduct() === item) {
        return true;
      }
    }
    return false;
  }

  isNotEmptyList(listId: string): boolean {
    return this.shoppingLists.get(listId) != undefined;
  }

}
