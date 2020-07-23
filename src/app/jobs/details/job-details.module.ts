import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { JobDetailsPage } from './job-details.page';
import { JobDetailsResolver } from './job-details.resolver';
import { JobService } from '../jobs.service';
import { WalkthroughPage } from '../../walkthrough/walkthrough.page';
import { AcceptJobFormPageModule } from '../accept-job-form/accept-job-form.module';
import { AcceptJobFormPage } from '../accept-job-form/accept-job-form.page';

const routes: Routes = [
  {
    path: '',
    component: JobDetailsPage,
    resolve: {
      data: JobDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule,
    AcceptJobFormPageModule,
    HttpClientModule
  ],
  declarations: [
    JobDetailsPage, WalkthroughPage
  ],
  providers: [
    JobDetailsResolver,
    JobService
  ],
  exports:[JobDetailsPage],
  entryComponents: [WalkthroughPage, AcceptJobFormPage]
})
export class JobDetailsPageModule {
  
}
