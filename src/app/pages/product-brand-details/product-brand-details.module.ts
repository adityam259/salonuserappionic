import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductBrandDetailsPageRoutingModule } from './product-brand-details-routing.module';

import { ProductBrandDetailsPage } from './product-brand-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductBrandDetailsPageRoutingModule
  ],
  declarations: [ProductBrandDetailsPage]
})
export class ProductBrandDetailsPageModule {}
