import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ComponentsModule } from '../../components/components.module';
import { environment } from '../../../environments/environment';
import { CreateJobAreaModal } from './create/create-job-area.modal';
import { UpdateJobAreaModal } from './update/update-job-area.modal';


const firebaseRoutes: Routes = [
  {
    path: 'listing',
    loadChildren: () => import('./listing/job-areas.module').then(m => m.JobAreasPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/job-areas-details.module').then(m => m.JobAreasDetailModule)
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(firebaseRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  entryComponents: [
    CreateJobAreaModal,
    UpdateJobAreaModal
  ],
  declarations: [
    CreateJobAreaModal,
    UpdateJobAreaModal
  ]
})
export class JobAreasIntegrationModule {}
