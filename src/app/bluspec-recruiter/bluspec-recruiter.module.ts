import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';
import { BluspecRecuiterPage } from './bluspec-recruiter.page';
import { LocationAutocompletePage } from './location-autocomplete/location-autocomplete.page';


const routes: Routes = [
  {
    path: '',
    component: BluspecRecuiterPage
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
  declarations: [BluspecRecuiterPage, LocationAutocompletePage],
  entryComponents:[ LocationAutocompletePage]
})
export class BluspecRecuiterPageModule {}
