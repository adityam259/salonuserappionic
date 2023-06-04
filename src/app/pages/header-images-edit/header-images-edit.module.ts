import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderImagesEditPageRoutingModule } from './header-images-edit-routing.module';

import { HeaderImagesEditPage } from './header-images-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderImagesEditPageRoutingModule
  ],
  declarations: [HeaderImagesEditPage]
})
export class HeaderImagesEditPageModule {}
