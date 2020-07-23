import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { UserService } from '../user.service';
import { AssignSkillsPage } from './assign-skills.page';
import { SelectJobAreaPage } from '../../utility-components/select-job-area/select-job-area.page';
import { UtilityComponentsModule } from '../../utility-components/utility-components.module';

const routes: Routes = [
  {
    path: '',
    component: AssignSkillsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UtilityComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssignSkillsPage],
  providers:[UserService],
  entryComponents:[ SelectJobAreaPage]
})
export class AssignSkillsPageModule {}
