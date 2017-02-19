import { Routes } from '@angular/router';
import { ProductStartComponent } from './product-start.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductStartComponent },
  { path: 'new', component: ProductEditComponent },
  { path: ':id', component: ProductDetailComponent },
  { path: ':id/edit', component: ProductEditComponent }
];
