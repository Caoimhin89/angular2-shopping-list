import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../../shopping-list/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private productIndex: number;
  selectedProduct: Product;

  constructor(private shoppingCartService: ShoppingCartService,
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
    this.shoppingCartService.addItems(this.selectedProduct);
  }

}
