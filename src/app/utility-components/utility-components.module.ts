import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { SelectJobAreaPage } from './select-job-area/select-job-area.page';

@NgModule({
  declarations: [SelectJobAreaPage],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule
  ],
  exports:[SelectJobAreaPage],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UtilityComponentsModule { }
