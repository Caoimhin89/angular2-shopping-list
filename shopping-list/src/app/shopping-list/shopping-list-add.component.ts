import { Component, OnInit } from '@angular/core';
import { Inclusion } from '../shared/inclusion';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {
  isAdd = true;
  item: Inclusion;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(purchase: Inclusion) {
    if(!this.isAdd) {
      //EDIT
    } {
      this.item = new Inclusion(purchase.name, purchase.quantity);
      this.shoppingListService.addItem(this.item);
      console.log("Purchase name: " + this.item.name + " | " + "Quantity: " + this.item.quantity);
    }
  }

}
