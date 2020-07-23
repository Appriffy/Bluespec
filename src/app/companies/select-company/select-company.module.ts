import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { SelectCompanyPage } from './select-company.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [SelectCompanyPage],
  exports: [SelectCompanyPage],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectCompanyPageModule {}