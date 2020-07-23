import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PostJobDetailPage } from './post-job-detail.page';
import { ComponentsModule } from '../../components/components.module';
import { LocationAutocompletePage } from '../../bluspec-recruiter/location-autocomplete/location-autocomplete.page';
import { JobService } from '../jobs.service';
import { UtilityComponentsModule } from '../../utility-components/utility-components.module';
import { SelectJobAreaPage } from '../../utility-components/select-job-area/select-job-area.page';
import { SelectJobSkillPageModule } from '../../utility-components/select-job-skill/select-job-skill.module';
import { SelectJobSkillPage } from '../../utility-components/select-job-skill/select-job-skill.page';
import { SelectCurrencyPage } from '../../utility-components/select-currency/select-currency.page';
import { SelectCurrencyPageModule } from '../../utility-components/select-currency/select-currency.module';
import { LocationAutocompletePageModule } from '../../bluspec-recruiter/location-autocomplete/location-autocomplete.module';
import { SelectCompanyPage } from '../../companies/select-company/select-company.page';
import { SelectCompanyPageModule } from '../../companies/select-company/select-company.module';
import { SelectCategoryPageModule } from '../select-category/select-category.module';
import { SelectCategoryPage } from '../select-category/select-category.page';

const routes: Routes = [
  {
    path: '',
    component: PostJobDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    UtilityComponentsModule,
    SelectJobSkillPageModule,
    SelectCurrencyPageModule,
    SelectCompanyPageModule,
    SelectCategoryPageModule,
    LocationAutocompletePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostJobDetailPage],
  entryComponents:[LocationAutocompletePage, SelectJobAreaPage, SelectJobSkillPage, SelectCurrencyPage, SelectCompanyPage, SelectCategoryPage],
  providers:[JobService]
})
export class PostJobDetailPageModule {}
