import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPage } from './dashboard.page';
import { AuthGuard } from '../guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard], 
    loadChildren: () => import('../dashboard/summary/summary.module').then(m => m.SummaryPageModule),
    component: DashboardPage,
    children: [
      {
        path: 'users-stats',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/users-summary/users-summary.module').then(m => m.UsersSummaryPageModule)
          }
        ]
      },
      {
        path: 'jobs-stats',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/jobs-summary/jobs-summary.module').then(m => m.JobsSummaryPageModule)
          }
        ]
      },
      {
        path: 'job-areas-stats',
        children: [
          {
            loadChildren: () => import('../dashboard/job-areas-summary/job-areas-summary.module').then(m => m.JobAreasSummaryPageModule)
      }
      ]},
      {
        path: 'jobareasstats',
        children: [
          {
            loadChildren: '../dashboard/job-areas-summary/job-areas-summary.module#JobAreasSummaryPageModule' 
      }
      ]},
      {
        path: 'summary',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/summary/summary.module').then(m => m.SummaryPageModule)
          }
        ]
      },
      {
        path: 'countries-summary',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/countries-summary/countries-summary.module').then(m => m.CountriesSummaryPageModule)
          }
        ]
      },
      {
        path: 'job-areas-summary',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/job-areas-summary/job-areas-summary.module').then(m => m.JobAreasSummaryPageModule
              )
          }
        ]
      }
      
    ]
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'dashboard/users-stats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ ]
})
export class DashboardRoutingModule {}
