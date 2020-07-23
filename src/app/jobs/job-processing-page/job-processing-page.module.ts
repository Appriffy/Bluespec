import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JobProcessingPagePage } from './job-processing-page.page';

const routes: Routes = [
  {
    path: '',
    component: JobProcessingPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JobProcessingPagePage]
})
export class JobProcessingPagePageModule {}
