import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipDetailsPage } from './membership-details.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipDetailsPageRoutingModule {}
