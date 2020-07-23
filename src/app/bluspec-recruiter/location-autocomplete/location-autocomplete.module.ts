import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocationAutocompletePage } from './location-autocomplete.page';

const routes: Routes = [
  {
    path: '',
    component: LocationAutocompletePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    //RouterModule.forChild(routes)
  ],
  declarations: [LocationAutocompletePage],
  exports: [
    LocationAutocompletePage
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LocationAutocompletePageModule {}
