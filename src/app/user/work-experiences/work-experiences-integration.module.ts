import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { CreateWorkExperiencesModal } from './create/create-work-experiences.modal';
import { UpdateWorkExperiencesModal } from './update/update-work-experiences.modal';

const firebaseRoutes: Routes = [
  // {
  //   path: 'listing',
  //   loadChildren: () => import('./education-details.module').then(m => m.EducationDetailsPageModule)
  // },
  {
    path: 'listing/:user_id',
    loadChildren: () => import('./work-experiences.module').then(m => m.WorkExperiencesPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create-work-experiences.modal').then(m => m.CreateWorkExperiencesModal)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./update/update-work-experiences.modal').then(m => m.UpdateWorkExperiencesModal)
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(firebaseRoutes)
  ],
  entryComponents: [
    CreateWorkExperiencesModal,
    UpdateWorkExperiencesModal
  ],
  declarations: [
    CreateWorkExperiencesModal,
    UpdateWorkExperiencesModal
  ]
})
export class WorkExperiencesIntegrationModule {}
