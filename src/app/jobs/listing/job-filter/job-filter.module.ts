import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JobFilterPage } from './job-filter.page';
import { SelectJobSkillPageModule } from '../../../utility-components/select-job-skill/select-job-skill.module';
import { SelectJobAreaPage } from '../../../utility-components/select-job-area/select-job-area.page';
import { SelectJobSkillPage } from '../../../utility-components/select-job-skill/select-job-skill.page';
import { UtilityComponentsModule } from '../../../utility-components/utility-components.module';
import { ComponentsModule } from '../../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: JobFilterPage
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
    RouterModule.forChild(routes)
  ],
  declarations: [JobFilterPage],
  entryComponents:[ SelectJobAreaPage, SelectJobSkillPage]
})
export class JobFilterPageModule {}
