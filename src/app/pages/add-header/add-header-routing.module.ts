import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddHeaderPage } from './add-header.page';

const routes: Routes = [
  {
    path: '',
    component: AddHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHeaderPageRoutingModule {}
