import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessionalProfilePage } from './professional-profile.page';
import { RegistrationService } from '../registration.service';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessionalProfilePage],
  providers:[RegistrationService]
})
export class ProfessionalProfilePageModule {}
