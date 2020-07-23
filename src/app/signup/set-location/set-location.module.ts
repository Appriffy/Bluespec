import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetLocationPage } from './set-location.page';
import { SharedModule } from '../../shared/components/map/shared.module';
import { RegistrationService } from '../registration.service';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: SetLocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetLocationPage],
  providers:[RegistrationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SetLocationPageModule {}
