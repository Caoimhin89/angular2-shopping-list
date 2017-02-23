import { Component, OnInit } from '@angular/core';
import { ShoppingList } from './shopping-list';
import { Purchase } from '../shared/purchase';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  lists: Map<string, ShoppingList> = null;
  items: Map<string, Purchase>;
  listSelected: boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.lists = this.shoppingListService.getShoppingLists();
  }

  onSelectList(listId: string) {
    this.items = this.shoppingListService.getItemsFromList(listId);
    console.log(this.items);
    this.listSelected = true;
  }

}
