import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../../components/components.module';
import { environment } from '../../../environments/environment';
import { CreateJobSkillModal } from './create/create-job-skill.modal';
import { UpdateJobSkillModal } from './update/update-job-skill.modal';
import { JobAreasService } from '../job-areas/job-areas.service';
import { SelectJobAreaPage } from '../../utility-components/select-job-area/select-job-area.page';
import { UtilityComponentsModule } from '../../utility-components/utility-components.module';

const firebaseRoutes: Routes = [
  {
    path: 'listing',
    loadChildren: () => import('./listing/job-skills.module').then(m => m.JobSkillsPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/job-skills-details.module').then(m => m.JobSkillsDetailModule)
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    UtilityComponentsModule,
    RouterModule.forChild(firebaseRoutes)
  ],
  entryComponents: [
    CreateJobSkillModal,
    UpdateJobSkillModal,
    SelectJobAreaPage
  ],
  declarations: [
    CreateJobSkillModal,
    UpdateJobSkillModal
  ],
  providers: [
    JobAreasService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JobSkillsIntegrationModule {}
