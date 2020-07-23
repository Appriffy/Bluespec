import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { AuthGuard } from '../guard/auth.guard';
import { EmployerGuard } from '../guard/employer.guard';

const firebaseRoutes: Routes = [
 
  { path: 'manager', 
  canActivate: [EmployerGuard], 
  loadChildren: () => import('./manager/manager.module').then(m => m.ManagerPageModule)
},
  {
    path: 'details/:job_code',
    canActivate: [AuthGuard], 
    loadChildren: () => import('./details/job-details.module').then(m => m.JobDetailsPageModule)
  },
  {
  path: 'applications/:job_code', 
  canActivate: [EmployerGuard], 
  loadChildren: () => import('./job-applications-manager/manager.module').then(m => m.JobApplicationsManagerPageModule)
},
{
  path: 'track/:job_code', 
  canActivate: [AuthGuard],
  loadChildren: () => import('./job-processing-page/job-processing-page.module').then(m => m.JobProcessingPagePageModule)
}
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(firebaseRoutes)
  ],
  entryComponents: [
   
  ],
  declarations: [

  ]
})
export class JobsIntegrationModule {}
