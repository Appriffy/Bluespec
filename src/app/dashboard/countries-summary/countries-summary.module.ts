import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CountriesSummaryPage } from './countries-summary.page';

const routes: Routes = [
  {
    path: '',
    component: CountriesSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CountriesSummaryPage]
})
export class CountriesSummaryPageModule {}
