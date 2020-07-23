import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../user.service';
import { ComponentsModule } from '../../components/components.module';
import { WorkExperiencesPage } from './work-experiences.page';
import { WorkExperiencesResolver } from './work-experiences.resolver';

const routes: Routes = [
  {
    path: '',
    component: WorkExperiencesPage,
    resolve: {
      data: WorkExperiencesResolver
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
  declarations: [WorkExperiencesPage],
  providers: [
    WorkExperiencesResolver,
    UserService
  ]
})
export class WorkExperiencesPageModule {
  
}
