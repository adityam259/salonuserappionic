import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembershipDetailsPageRoutingModule } from './membership-details-routing.module';

import { MembershipDetailsPage } from './membership-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershipDetailsPageRoutingModule
  ],
  declarations: [MembershipDetailsPage]
})
export class MembershipDetailsPageModule {}
