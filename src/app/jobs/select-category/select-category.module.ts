import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { SelectCategoryPage } from './select-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [SelectCategoryPage],
  exports: [SelectCategoryPage],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectCategoryPageModule {}
