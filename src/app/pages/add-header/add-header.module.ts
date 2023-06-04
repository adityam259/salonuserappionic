import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddHeaderPageRoutingModule } from './add-header-routing.module';

import { AddHeaderPage } from './add-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddHeaderPageRoutingModule
  ],
  declarations: [AddHeaderPage]
})
export class AddHeaderPageModule {}
