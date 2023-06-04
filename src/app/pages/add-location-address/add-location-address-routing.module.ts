import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLocationAddressPage } from './add-location-address.page';

const routes: Routes = [
  {
    path: '',
    component: AddLocationAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLocationAddressPageRoutingModule {}
