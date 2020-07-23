import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetFavSkillsPage } from './set-fav-skills.page';

const routes: Routes = [
  {
    path: '',
    component: SetFavSkillsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetFavSkillsPage]
})
export class SetFavSkillsPageModule {}
