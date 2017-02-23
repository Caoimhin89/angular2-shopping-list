import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Product } from './product';
import { Inclusion } from '../shared/inclusion';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product('Mystery Item', 'This is a mystery item', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Package-Christmas-Gift-Present-Celebration-Holiday-1893642.jpg', [
      new Inclusion("Mysterious stuff", 3)
    ]),
    new Product('Laptop', 'This is a laptop', 'http://res.freestockphotos.biz/pictures/17/17118-illustration-of-a-laptop-computer-pv.png', [
      new Inclusion("Laptop", 1),
      new Inclusion("Power Adapter", 1),
      new Inclusion("HDMI Cable", 1),
      new Inclusion("Wireless Mouse", 1)
    ]),
    new Product('Treadmill Desk', 'This is a treadmill desk', 'https://c1.staticflickr.com/6/5230/5680989930_1c31e059dc_b.jpg', []),
    new Product('Headphones', 'These are headphones', 'https://static.pexels.com/photos/205926/pexels-photo-205926.jpeg', []),
    new Product('Pocket Projector', 'This is a pocket projector', 'https://c1.staticflickr.com/6/5558/15022214708_8f5f188b67_z.jpg', [
      new Inclusion('Projector', 1),
      new Inclusion('Power Adapter', 1),
      new Inclusion('USB cable', 1)
    ])
  ];

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

  addProduct() {
    const body = JSON.stringify(this.products);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.http.post('https://e-commerce-24d8c.firebaseio.com/products.json', body, {headers: headers});
  }

  fetchProductData() {

  }
}
