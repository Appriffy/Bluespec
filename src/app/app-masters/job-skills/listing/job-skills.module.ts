import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../../components/components.module';
import { JobSkillsService } from '../job-skills.service';
import { JobSkillsPage } from './job-skills.page';

const routes: Routes = [
  {
    path: '',
    component: JobSkillsPage
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
  declarations: [JobSkillsPage],
  providers: [
    JobSkillsService
  ]
})
export class JobSkillsPageModule {

}
