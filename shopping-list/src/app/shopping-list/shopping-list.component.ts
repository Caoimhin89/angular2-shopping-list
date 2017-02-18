import { Component, OnInit } from '@angular/core';
import { Inclusion } from '../shared/inclusion';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Inclusion[] = [];

  constructor() { }

  ngOnInit() {
  }

}
