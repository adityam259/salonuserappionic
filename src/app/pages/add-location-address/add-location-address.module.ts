import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLocationAddressPageRoutingModule } from './add-location-address-routing.module';

import { AddLocationAddressPage } from './add-location-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLocationAddressPageRoutingModule
  ],
  declarations: [AddLocationAddressPage]
})
export class AddLocationAddressPageModule {}
