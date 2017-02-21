import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { Purchase } from '../shared/purchase';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {
  isAdd = true;
  item: Purchase;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(name: string, quantity: number, list: string) {
    if(!this.isAdd) {
      //EDIT
    } {
      let product = new Product(name, '', '', []);
      this.item = new Purchase(product, quantity);
      this.shoppingListService.addItemToList(list, product, quantity);
      console.log("Purchase name: " + name + " | " + "Quantity: " + quantity + " | " + "List: " + list);
    }
  }

}
