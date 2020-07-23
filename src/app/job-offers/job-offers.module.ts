import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JobOffersPage } from './job-offers.page';
import { JobOffersResolver } from './job-offers.resolver';
import { ComponentsModule } from '../components/components.module';
import { JobOffersService } from './job-offers.service';

const routes: Routes = [
  {
    path: '',
    component: JobOffersPage,
    resolve: {
      data: JobOffersResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JobOffersPage],
  providers: [
    JobOffersService,
    JobOffersResolver
  ]
})
export class JobOffersPageModule {}
