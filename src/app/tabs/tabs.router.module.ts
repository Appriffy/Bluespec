import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
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
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      }

      
    ]
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'app/categories',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ ]
})
export class TabsPageRoutingModule {}
