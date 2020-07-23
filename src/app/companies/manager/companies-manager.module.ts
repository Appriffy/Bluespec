import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CompanyListingResolver } from '../companies.resolver';
import { CompanyService } from '../companies.service';
import { ComponentsModule } from '../../components/components.module';
import { CompaniesManagerPage } from './companies-manager.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniesManagerPage,
    resolve: {
      data: CompanyListingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompaniesManagerPage],
  providers: [
    CompanyListingResolver,
    CompanyService
  ],
  entryComponents: []
})
export class CompaniesManagerPageModule {

}
