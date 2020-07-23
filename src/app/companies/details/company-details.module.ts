import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { CompanyDetailsPage } from './company-details.page';
import { CompanyDetailsResolver } from './company-details.resolver';
import { CompanyService } from '../companies.service';

const routes: Routes = [
  {
    path: '',
    component: CompanyDetailsPage,
    resolve: {
      data: CompanyDetailsResolver
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
  declarations: [CompanyDetailsPage],
  providers: [
    CompanyService,
    CompanyDetailsResolver
  ]
})
export class CompanyDetailsPageModule {}
