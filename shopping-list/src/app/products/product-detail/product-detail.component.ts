import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

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
    this.shoppingCartService.addItems(this.selectedProduct);
  }

  onEdit() {
    this.router.navigate(['/products', this.productIndex, 'edit']);
  }

  onDelete() {
    this.productService.deleteProduct(this.selectedProduct);
    this.router.navigate(['/products']);
  }

}
