import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBeauticianPage } from './add-beautician.page';

const routes: Routes = [
  {
    path: '',
    component: AddBeauticianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBeauticianPageRoutingModule {}
