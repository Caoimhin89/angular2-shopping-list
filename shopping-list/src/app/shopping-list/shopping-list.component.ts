import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Map<string, number> = null;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }

}
