import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { Product } from './product';
import { Inclusion } from '../shared/inclusion';

@Injectable()
export class ProductService {
  productsChanged = new EventEmitter<Product[]>();
  private products: Product[] = [];

  constructor(private http: Http) { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number) {
    return this.products[id];
  }

  deleteProduct(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
  }

  addProduct(product: Product) {
    this.products.push(product);
    return this.storeProducts();
  }

  editProduct(originalProduct: Product, updatedProduct: Product) {
    this.products[this.products.indexOf(originalProduct)] = updatedProduct;
    return this.storeProducts();
  }

  storeProducts() {
    const requestParams = this.createHttpParams(this.products);
    return this.http.put('https://e-commerce-24d8c.firebaseio.com/products/.json', requestParams.body, {headers: requestParams.headers});
  }

  fetchProducts() {
    return this.http.get('https://e-commerce-24d8c.firebaseio.com/products/.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Product[]) => {
          this.products = data;
          this.productsChanged.emit(this.products);
        }
      );
  }

  //Sub-Routines

  createHttpParams(resourceToSend: any) {
    const body = JSON.stringify(resourceToSend);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return {body: body, headers: headers};
  }
}
