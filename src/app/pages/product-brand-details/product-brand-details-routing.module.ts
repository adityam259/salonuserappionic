import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductBrandDetailsPage } from './product-brand-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProductBrandDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductBrandDetailsPageRoutingModule {}
