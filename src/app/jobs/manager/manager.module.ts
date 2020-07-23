import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManagerPage } from './manager.page';
import { JobManagerResolver } from './job-manager.resolver';
import { JobService } from '../jobs.service';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ManagerPage,
    resolve: {
      data: JobManagerResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManagerPage],
  providers: [
    JobManagerResolver,
    JobService
  ]
})
export class ManagerPageModule {}
