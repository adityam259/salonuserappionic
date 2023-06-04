import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBeauticianPageRoutingModule } from './add-beautician-routing.module';

import { AddBeauticianPage } from './add-beautician.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBeauticianPageRoutingModule
  ],
  declarations: [AddBeauticianPage]
})
export class AddBeauticianPageModule {}
