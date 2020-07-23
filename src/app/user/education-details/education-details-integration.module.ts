import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { CreateEducationDetailsModal } from './create/create-education-details.modal';
import { UpdateEducationDetailsModal } from './update/update-education-details.modal';
import { SelectStudyAreaPageModule } from '../../utility-components/select-study-area/select-study-area.module';
import { SelectStudyAreaPage } from '../../utility-components/select-study-area/select-study-area.page';

const firebaseRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./education-details.module').then(m => m.EducationDetailsPageModule)
  },
  {
    path: 'listing/:user_id',
    loadChildren: () => import('./education-details.module').then(m => m.EducationDetailsPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create-education-details.modal').then(m => m.CreateEducationDetailsModal)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./update/update-education-details.modal').then(m => m.UpdateEducationDetailsModal)
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SelectStudyAreaPageModule,
    RouterModule.forChild(firebaseRoutes)
  ],
  entryComponents: [
    CreateEducationDetailsModal,
    UpdateEducationDetailsModal,
    SelectStudyAreaPage
  ],
  declarations: [
    CreateEducationDetailsModal,
    UpdateEducationDetailsModal
  ]
})
export class EducationDetailsIntegrationModule {}
