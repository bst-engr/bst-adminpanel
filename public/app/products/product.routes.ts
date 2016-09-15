import { RouterConfig } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductSaveComponent } from './product-save.component';

export const ProductRoutes: RouterConfig = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'add-product', component: ProductSaveComponent},
  { path: 'edit-product/:id', component: ProductSaveComponent}
];
