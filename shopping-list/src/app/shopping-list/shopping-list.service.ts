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

  getItemsFromList(listId: string) : Map<string, Purchase> {
    return this.shoppingLists.get(listId).getPurchases();
  }

  addItemToList(listId: string, item: Product, quantity: number) {
    this.createListIfNew(listId);
    this.putItemIntoList(listId, item, quantity);
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
    let result: boolean;
    this.shoppingLists.get(listId).getPurchases().has(item.name) ? result = true : result = false;
    return result;
  }

  isNotEmptyList(listId: string): boolean {
    return this.shoppingLists.get(listId) != undefined;
  }

  addAdditionalUnitsToListItem(listId: string, item: Product) {
    this.shoppingLists.get(listId).getPurchases().get(item.name).addOneUnit();
    console.log("Additional Units Added!");
  }

  addNewPurchaseToList(listId: string, item: Product, quantity: number) {
    this.shoppingLists.get(listId).addNewPurchase(new Purchase(item, quantity));
    console.log("New Purchase Added!");
  }

  createListIfNew(listId: string) : void {
    if(this.isNewList(listId)) {
      return;
    }
    this.createNewShoppingList(listId);
    console.log("New List Created: " + listId);
  }

  putItemIntoList(listId: string, item: Product, quantity: number) : void{
    if(this.isNotEmptyList(listId)) {
      this.isAlreadyInList(listId, item) ?
        this.addAdditionalUnitsToListItem(listId, item) :
        this.addNewPurchaseToList(listId, item, quantity);
    } else {
      this.addNewPurchaseToList(listId, item, quantity);
    }
  }

}
