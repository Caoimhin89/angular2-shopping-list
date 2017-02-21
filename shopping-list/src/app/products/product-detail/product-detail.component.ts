import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Product } from '../product';
import { ShoppingList } from '../../shopping-list/shopping-list';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private productIndex: number;
  selectedProduct: Product;
  selectedList: string;
  lists: Map<string, ShoppingList> = new Map();
  editList: boolean = false;
  newList: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService,
              private shoppingListService: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.productIndex = params['id'];
        this.selectedProduct = this.productService.getProductById(this.productIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddToCart() {
    this.shoppingCartService.addItem(this.selectedProduct);
  }

  onSaveToList() {
    this.lists = this.shoppingListService.getShoppingLists();
    this.editList = true;
  }

  onAddToList() {
    this.shoppingListService.addItemToList(this.selectedList, this.selectedProduct, 1);
    this.editList = false;
  }

  onCreateList(listName: string) {
    this.shoppingListService.createNewShoppingList(listName);
    this.newList = false;
    this.editList = false;
  }

  onSelect(selection: string) {
    this.selectedList = selection;
  }

  onEdit() {
    this.router.navigate(['/products', this.productIndex, 'edit']);
  }

  onDelete() {
    this.productService.deleteProduct(this.selectedProduct);
    this.router.navigate(['/products']);
  }

}
