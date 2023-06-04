import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderImagesListPage } from './header-images-list.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderImagesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderImagesListPageRoutingModule {}
