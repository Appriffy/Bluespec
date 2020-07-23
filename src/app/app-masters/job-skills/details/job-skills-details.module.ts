import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../../components/components.module';
import { JobSkillsDetailsPage } from './job-skills-details.page';
import { JobSkillsService } from '../job-skills.service';
import { JobSkillDetailsResolver } from './job-skills-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: JobSkillsDetailsPage,
    resolve: {
      data: JobSkillDetailsResolver
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
  declarations: [JobSkillsDetailsPage],
  providers: [
    JobSkillsService, JobSkillDetailsResolver
  ]
})
export class JobSkillsDetailModule {}
