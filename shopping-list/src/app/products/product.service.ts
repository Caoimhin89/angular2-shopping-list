import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product('Mystery Item', 'This is a mystery item', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Package-Christmas-Gift-Present-Celebration-Holiday-1893642.jpg', []),
    new Product('Laptop', 'This is a laptop', 'http://res.freestockphotos.biz/pictures/17/17118-illustration-of-a-laptop-computer-pv.png', []),
    new Product('Treadmill Desk', 'This is a treadmill desk', 'https://c1.staticflickr.com/6/5230/5680989930_1c31e059dc_b.jpg', []),
    new Product('Headphones', 'These are headphones', 'https://static.pexels.com/photos/205926/pexels-photo-205926.jpeg', []),
    new Product('Pocket Projector', 'This is a pocket projector', 'https://c1.staticflickr.com/6/5558/15022214708_8f5f188b67_z.jpg', [])
  ]

  constructor() { }

  getProducts() {
    return this.products;
  }
}
