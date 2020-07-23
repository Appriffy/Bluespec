import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { JobListingPage } from './jobs-listing.page';
import { JobListingResolver } from './jobs-listing.resolver';
import { JobService } from '../jobs.service';
import { JobFilterPage } from './job-filter/job-filter.page';
import { SelectJobSkillPage } from '../../utility-components/select-job-skill/select-job-skill.page';
import { SelectJobAreaPage } from '../../utility-components/select-job-area/select-job-area.page';
import { UtilityComponentsModule } from '../../utility-components/utility-components.module';
import { SelectJobSkillPageModule } from '../../utility-components/select-job-skill/select-job-skill.module';
import { SelectCurrencyPageModule } from '../../utility-components/select-currency/select-currency.module';
import { SelectCurrencyPage } from '../../utility-components/select-currency/select-currency.page';
import { LocationAutocompletePage } from '../../bluspec-recruiter/location-autocomplete/location-autocomplete.page';
import { LocationAutocompletePageModule } from '../../bluspec-recruiter/location-autocomplete/location-autocomplete.module';

const routes: Routes = [
  {
    path: '',
    component: JobListingPage,
    resolve: {
      data: JobListingResolver
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
    ComponentsModule,
    UtilityComponentsModule,
    LocationAutocompletePageModule,
    SelectJobSkillPageModule,
    SelectCurrencyPageModule,
    PipesModule,
    HttpClientModule
  ],
  declarations: [
    JobListingPage, JobFilterPage
  ],
  providers: [
    JobListingResolver,
    JobService
  ],
  entryComponents: [JobFilterPage, LocationAutocompletePage, SelectJobAreaPage, SelectJobSkillPage, SelectCurrencyPage]
})
export class JobListingPageModule {}
