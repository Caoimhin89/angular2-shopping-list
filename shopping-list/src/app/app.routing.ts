import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PRODUCT_ROUTES } from './products/products.routes';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full' },
  {path: 'products', component: ProductsComponent, children: PRODUCT_ROUTES },
  {path: 'shopping-list', component: ShoppingListComponent },
  {path: 'shopping-cart', component: ShoppingCartComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
