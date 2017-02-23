import { Inclusion } from '../shared/inclusion';

export class Product {
  constructor(public name: string,
              public description: string,
              public imagePath: string,
              public inclusions: Inclusion[]) {

  }
}
