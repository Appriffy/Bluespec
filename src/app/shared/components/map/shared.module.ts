import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map.component';


const COMPONENTS: any[] = [
  MapComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [COMPONENTS],
  exports: [...COMPONENTS, CommonModule, HttpClientModule],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }