import { Product } from '../products/product';

export class Purchase {
  private id: string;
  constructor(private product: Product, private quantity: number) {
    this.id = product.name;
  }

  getId() {
    return this.id;
  }

  getProduct() : Product {
    return this.product;
  }

  getQuantity() : number {
    return this.quantity;
  }

  addOneUnit() {
    this.quantity++;
  }

  addMultipleUnits(additionalUnits: number) {
    this.quantity += additionalUnits;
  }
}
