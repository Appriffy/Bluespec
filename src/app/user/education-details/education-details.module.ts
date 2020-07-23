import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../user.service';
import { ComponentsModule } from '../../components/components.module';
import { EducationDetailsPage } from './education-details.page';
import { EducationDetailsResolver } from './education-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: EducationDetailsPage,
    resolve: {
      data: EducationDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EducationDetailsPage],
  providers: [
    EducationDetailsResolver,
    UserService
  ]
})
export class EducationDetailsPageModule {
  
}
