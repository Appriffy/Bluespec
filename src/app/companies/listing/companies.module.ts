import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CompaniesPage } from './companies.page';
import { CompanyListingResolver } from '../companies.resolver';
import { CompanyService } from '../companies.service';
import { ComponentsModule } from '../../components/components.module';
import { CompanyFilterPage } from './company-filter/company-filter.page';
import { LocationAutocompletePage } from '../../bluspec-recruiter/location-autocomplete/location-autocomplete.page';
import { LocationAutocompletePageModule } from '../../bluspec-recruiter/location-autocomplete/location-autocomplete.module';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPage,
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
    LocationAutocompletePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompaniesPage, CompanyFilterPage],
  providers: [
    CompanyListingResolver,
    CompanyService
  ],
  entryComponents: [ CompanyFilterPage, LocationAutocompletePage]
})
export class CompaniesPageModule {

}
