import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCategoryEditPage } from './list-category-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ListCategoryEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCategoryEditPageRoutingModule {}
