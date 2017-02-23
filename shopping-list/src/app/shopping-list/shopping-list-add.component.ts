import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {
  isAdd = true;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(name: string, quantity: number, list: string) {
    if(this.isAdd) {
      let product = new Product(name, '', '', []);
      this.shoppingListService.addItemToList(list, product, quantity);
      product = null;
    } else {
     // EDIT
    }
  }

}
