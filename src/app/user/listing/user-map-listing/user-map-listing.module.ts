import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserMapListingPage } from './user-map-listing.page';
import { SharedModule } from '../../../shared/components/map/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UserMapListingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserMapListingPage ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserMapListingPageModule {}
