import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular'
import { ComponentsModule } from '../../components/components.module';
import { UpdateUserProfileModal } from './update-user-profile.modal';

const routes: Routes = [
  {
    path: '',
    component: UpdateUserProfileModal
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  //exports:[UpdateUserModule],
  entryComponents:[],
  declarations: [UpdateUserProfileModal]
})
export class UpdateUserModule {}
