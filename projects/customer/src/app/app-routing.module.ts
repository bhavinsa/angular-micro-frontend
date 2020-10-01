import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product-details',
    component: ProductDetailComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
