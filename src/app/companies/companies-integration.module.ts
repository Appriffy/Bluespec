import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { UpdateCompanyModal } from './update/update-company.modal';
import { CreateCompanyModal } from './create/create-company.modal';

const firebaseRoutes: Routes = [
  {
    path: 'listing',
    loadChildren: () => import('./listing/companies.module').then(m => m.CompaniesPageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/companies-manager.module').then(m => m.CompaniesManagerPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/company-details.module').then(m => m.CompanyDetailsPageModule)
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
    CreateCompanyModal,
    UpdateCompanyModal
  ],
  declarations: [
    CreateCompanyModal,
    UpdateCompanyModal
  ]
})
export class CompanyIntegrationModule {}
