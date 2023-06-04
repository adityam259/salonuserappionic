import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderImagesListPageRoutingModule } from './header-images-list-routing.module';

import { HeaderImagesListPage } from './header-images-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderImagesListPageRoutingModule
  ],
  declarations: [HeaderImagesListPage]
})
export class HeaderImagesListPageModule {}
