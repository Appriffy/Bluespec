import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../../components/components.module';
import { JobAreasDetailsResolver } from './job-areas-details.resolver';
import { JobAreasDetailsPage } from './job-areas-details.page';
import { JobAreasService } from '../job-areas.service';

const routes: Routes = [
  {
    path: '',
    component: JobAreasDetailsPage,
    resolve: {
      data: JobAreasDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [JobAreasDetailsPage],
  providers: [
    JobAreasService, JobAreasDetailsResolver
  ]
})
export class JobAreasDetailModule {}
