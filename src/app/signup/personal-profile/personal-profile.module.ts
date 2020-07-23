import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonalProfilePage } from './personal-profile.page';
import { RegistrationService } from '../registration.service';

const routes: Routes = [
  {
    path: '',
    component: PersonalProfilePage
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
  declarations: [PersonalProfilePage],
  providers:[RegistrationService]
})
export class PersonalProfilePageModule {}
