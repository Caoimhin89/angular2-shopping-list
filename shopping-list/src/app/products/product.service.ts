import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { Product } from './product';

@Injectable()
export class ProductService {
  productsChanged = new EventEmitter<Product[]>();
  private products: Product[] = [];

  constructor(private http: Http) { }

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products[id];
  }

  deleteProduct(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
  }

  addAllProducts() {
    const requestParams = this.createHttpParams(this.products);
    return this.http.post('https://e-commerce-24d8c.firebaseio.com/products.json', requestParams.body, {headers: requestParams.headers});
  }

  addProduct(product: Product) {
    const requestParams = this.createHttpParams(product);
    this.products.push(product);
    return this.http.post(`https://e-commerce-24d8c.firebaseio.com/products/.json`, requestParams.body, {headers: requestParams.headers});
  }

  editProduct(originalProduct: Product, updatedProduct: Product) {
    this.products[this.products.indexOf(originalProduct)] = updatedProduct;
    const requestParams = this.createHttpParams(updatedProduct);
    return this.http.post(`https://e-commerce-24d8c.firebaseio.com/products/.json`, requestParams.body, {headers: requestParams.headers});
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
