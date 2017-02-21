import { Purchase } from '../shared/purchase';

export class ShoppingList {
  constructor(private name: string, private purchases: Map<string, Purchase>) {}

  getName() {
    return this.name;
  }

  getPurchasesArray() : Purchase[] {
    let purchaseArray: Purchase[] = [];
    let i = this.purchases.size;
    while(i > 0) {
      purchaseArray.push(this.purchases.values().next().value);
      i--;
    }
    return purchaseArray;
  }

  getPurchases() : Map<string, Purchase> {
    return this.purchases;
  }

  addNewPurchase(purchase: Purchase) {
    this.purchases.set(purchase.getId(), purchase);
  }
}


