import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderImagesEditPage } from './header-images-edit.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderImagesEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderImagesEditPageRoutingModule {}
