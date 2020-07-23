import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular'
import { ComponentsModule } from '../../components/components.module';
import { UpdateUserModal } from './update-user.modal';

const routes: Routes = [
  {
    path: '',
    component: UpdateUserModal
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
  declarations: [UpdateUserModal]
})
export class UpdateUserModule {}
