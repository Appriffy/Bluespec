import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecruiterWalkthroughPage } from './recruiter-walkthrough.page';

const routes: Routes = [
  {
    path: '',
    component: RecruiterWalkthroughPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecruiterWalkthroughPage]
})
export class RecruiterWalkthroughPageModule {}
