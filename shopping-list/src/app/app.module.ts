import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { ProductService } from './products/product.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductStartComponent } from './products/product-start.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

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
    DropdownDirective,
    ProductEditComponent,
    ProductStartComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProductService, ShoppingCartService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
