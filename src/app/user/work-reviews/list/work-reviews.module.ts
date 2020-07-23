import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WorkReviewsPage } from './work-reviews.page';
import { ComponentsModule } from '../../../components/components.module';
import { WorkReviewModule } from '../work-review/work-review.module';

const routes: Routes = [
  {
    path: '',
    component: WorkReviewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    WorkReviewModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkReviewsPage]
})
export class WorkReviewsPageModule {}
