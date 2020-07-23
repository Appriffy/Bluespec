import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../../components/components.module';
import { JobAreasService } from '../job-areas.service';
import { JobAreasPage } from './job-areas.page';

const routes: Routes = [
  {
    path: '',
    component: JobAreasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JobAreasPage],
  providers: [
    JobAreasService
  ]
})
export class JobAreasPageModule {

}
