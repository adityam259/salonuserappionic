import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCategoryEditPageRoutingModule } from './list-category-edit-routing.module';

import { ListCategoryEditPage } from './list-category-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCategoryEditPageRoutingModule
  ],
  declarations: [ListCategoryEditPage]
})
export class ListCategoryEditPageModule {}
