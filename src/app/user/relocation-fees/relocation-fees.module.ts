import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelocationFeesPage } from './relocation-fees.page';
import { ComponentsModule } from '../../components/components.module';
import { SelectCurrencyPageModule } from '../../utility-components/select-currency/select-currency.module';
import { SelectCurrencyPage } from '../../utility-components/select-currency/select-currency.page';

const routes: Routes = [
  {
    path: '',
    component: RelocationFeesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    SelectCurrencyPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelocationFeesPage],
  entryComponents:[SelectCurrencyPage]
})
export class RelocationFeesPageModule {}
