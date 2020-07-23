import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { SelectStudyAreaPage } from './select-study-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [SelectStudyAreaPage],
  exports: [SelectStudyAreaPage],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectStudyAreaPageModule {}