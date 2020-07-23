import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JobApplicationsManagerPage } from './manager.page';
import { JobService } from '../jobs.service';
import { ComponentsModule } from '../../components/components.module';
import { JobApplicationsManagerResolver } from './manager.resolver';
import { ViewJobApplicationModal } from './view-job-application/view-job-application.modal';

const routes: Routes = [
  {
    path: '',
    component: JobApplicationsManagerPage,
    resolve: {
      data: JobApplicationsManagerResolver
    }
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
  declarations: [JobApplicationsManagerPage, ViewJobApplicationModal],
  providers: [
    JobApplicationsManagerResolver,
    JobService
  ],
  entryComponents:[ViewJobApplicationModal],
  //exports:[ViewJobApplicationModal]
})
export class JobApplicationsManagerPageModule {}
