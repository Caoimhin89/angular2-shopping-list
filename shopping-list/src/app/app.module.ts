import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductService } from './products/product.service';
import { ShoppingCartService } from './shopping-list/shopping-cart.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
