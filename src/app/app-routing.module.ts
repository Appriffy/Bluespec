import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { VisitorGuard } from './guard/visitor.guard';
import { EmployerGuard } from './guard/employer.guard';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  { path: '',  
  redirectTo: '/welcome', pathMatch: 'full' },


  { path: 'welcome', loadChildren: './welcome/welcome/welcome.module#WelcomePageModule' },

  { path: 'walkthrough', loadChildren: () => import('./walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule) },
  
  { path: 'getting-started', 
  loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedPageModule) },

     { path: 'app-debug', 
   loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesPageModule) },


  /************* SIGN UP PROCESS *************/
  {
    path: 'registration',
    canActivate: [VisitorGuard],
    children: [
      { path: 'take-photo', 
      loadChildren: './signup/take-photo/take-photo.module#TakePhotoPageModule' },
    
      { path: 'personal-profile', 
      loadChildren: './signup/personal-profile/personal-profile.module#PersonalProfilePageModule' },
    
      { path: 'professional-profile', loadChildren: './signup/professional-profile/professional-profile.module#ProfessionalProfilePageModule' },
      { path: 'set-location', loadChildren: './signup/set-location/set-location.module#SetLocationPageModule' },
      { path: 'set-fav-skills', loadChildren: './signup/set-fav-skills/set-fav-skills.module#SetFavSkillsPageModule' },
      { path: 'verify-account', loadChildren: './signup/verify-account/verify-account.module#VerifyAccountPageModule' }
    ]
  },
  /******** END OF SIGN UP PROCESS ************/
  { path: 'professional-profile', loadChildren: './signup/professional-profile/professional-profile.module#ProfessionalProfilePageModule' },

   { path: 'bluspec-recruiter', 
   canActivate: [EmployerGuard], 
   loadChildren: () => import('./bluspec-recruiter/bluspec-recruiter.module').then(m => m.BluspecRecuiterPageModule) },

   { path: 'education-details', 
   canActivate: [AuthGuard], 
   loadChildren: () => import('./user/education-details/education-details-integration.module').then(m => m.EducationDetailsIntegrationModule) },

   { path: 'work-experiences', 
   canActivate: [AuthGuard], 
   loadChildren: () => import('./user/work-experiences/work-experiences-integration.module').then(m => m.WorkExperiencesIntegrationModule) },

   { path: 'notifications', 
   canActivate: [AuthGuard], 
   loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule) },


  { path: 'auth/login',
  //canActivate: [VisitorGuard], 
   loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },

  { path: 'auth/signup', 
  canActivate: [VisitorGuard], 
  loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) },

  { path: 'auth/forgot-password', 
  canActivate: [VisitorGuard], 
  loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) },
  

  { path: 'dashboard-summary',  canActivate: [AdminGuard], loadChildren: './dashboard/summary/summary.module#SummaryPageModule' },
 
  { path: 'users-summary', 
  canActivate: [AdminGuard], 
  loadChildren: './dashboard/users-summary/users-summary.module#UsersSummaryPageModule' },
  { path: 'jobs-summary', 
  canActivate: [AdminGuard], 
  loadChildren: './dashboard/jobs-summary/jobs-summary.module#JobsSummaryPageModule' },
  { path: 'countries-summary',
  canActivate: [AdminGuard], 
   loadChildren: './dashboard/countries-summary/countries-summary.module#CountriesSummaryPageModule' },
 { path: 'job-areas-summary',
 canActivate: [AdminGuard], 
  loadChildren: './dashboard/job-areas-summary/job-areas-summary.module#JobAreasSummaryPageModule' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule) },
  
  { path: 'employer-dashboard', 
  canActivate: [EmployerGuard], 
  loadChildren: () => import('./dashboard/employers/employer-dashboard/employer-dashboard.module').then(m => m.EmployerDashboardPageModule) },
  
    {
      path: 'profile',
      canActivate: [AuthGuard], 
      loadChildren: () => import('./user/profile/user-profile.module').then(m => m.UserProfilePageModule)
    },

  {
    path: 'view-profile/:user_id',
    canActivate: [AuthGuard], 
    loadChildren: () => import('./user/profile/user-profile.module').then(m => m.UserProfilePageModule)
  },

  { path: 'contact-card', loadChildren: () => import('./contact-card/contact-card.module').then(m => m.ContactCardPageModule) },

  { path: 'page-not-found', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  
  { path: 'coming-soon', loadChildren: () => import('./coming-soon/coming-soon.module').then(m => m.ComingSoonPageModule) },
  
  { path: 'under-dev', loadChildren: './coming-soon/coming-soon.module#ComingSoonPageModule' },
  
  { path: 'showcase', loadChildren: () => import('./showcase/showcase.module').then(m => m.ShowcasePageModule) },
  
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsPageModule) },
  
  { path: 'job-requests', 
  canActivate: [AuthGuard], 
  loadChildren: () => import('./jobs/listing/jobs-listing.module').then(m => m.JobListingPageModule) },
 
  { path: 'companies', 
  canActivate: [AuthGuard],
  loadChildren: () => import('./companies/companies-integration.module').then(m => m.CompanyIntegrationModule) },
 
 
  // {
  //   path: 'company-detail/:productId',
  //   //canActivate: [AuthGuard],
  //   loadChildren: () => import('./companies/details/company-details.module').then(m => m.CompanyDetailsPageModule)
  // },

  { path: 'people', 
  canActivate: [AuthGuard],
  loadChildren: () => import('./user/users-integration-module').then(m => m.UsersIntegrationModule) },
 
  { path: 'manage-employers', 
  canActivate: [AdminGuard],
  data : [{role_id : '2', status : 'All', 'numJobs': '1'}],
  loadChildren: () => import('./user/listing/listing.module').then(m => m.ListingPageModule) },

  { path: 'jobs', 
  canActivate: [AuthGuard],
  loadChildren: () => import('./jobs/jobs-integration-module').then(m => m.JobsIntegrationModule) },
 
  { path: 'job-skills', 
  loadChildren: () => import('./app-masters/job-skills/job-skills-integration.module').then(m => m.JobSkillsIntegrationModule) },

  { path: 'job-areas', 
  loadChildren: () => import('./app-masters/job-areas/job-areas-integration.module').then(m => m.JobAreasIntegrationModule) },
  
  { path: 'recruiter-walkthrough', loadChildren: './recruiter-walkthrough/recruiter-walkthrough.module#RecruiterWalkthroughPageModule' },
  

  { path: 'hire-people-for-work', 
  canActivate: [EmployerGuard], 
  loadChildren: './user/listing/listing.module#ListingPageModule' },

  { path: 'job-filter', canActivate: [AuthGuard], loadChildren: './jobs/listing/job-filter/job-filter.module#JobFilterPageModule' },

  { path: 'user-map-listing', loadChildren: './user/listing/user-map-listing/user-map-listing.module#UserMapListingPageModule' },
  
  { path: 'location-autocomplete', loadChildren: './bluspec-recruiter/location-autocomplete/location-autocomplete.module#LocationAutocompletePageModule' },
  { path: 'accept-job-form', canActivate: [AuthGuard], loadChildren: './jobs/accept-job-form/accept-job-form.module#AcceptJobFormPageModule' },
  
  { path: 'post-new-job',   
   canActivate: [EmployerGuard], 
   loadChildren: './jobs/post-job-detail/post-job-detail.module#PostJobDetailPageModule' },
  
  { path: 'auth/logout', loadChildren: './logout/logout.module#LogoutPageModule' },
 
  { path: 'relocation-fees', loadChildren: './user/relocation-fees/relocation-fees.module#RelocationFeesPageModule' },
 
  { path: 'job-offers', 
  canActivate: [AuthGuard], 
  loadChildren: './job-offers/job-offers.module#JobOffersPageModule' },
  
  { path: 'job-processing-page',
  canActivate: [AuthGuard], 
  loadChildren: './jobs/job-processing-page/job-processing-page.module#JobProcessingPagePageModule' },

  //{ path: 'select-job-area', loadChildren: './app-masters/job-areas/select-job-area/select-job-area.module#SelectJobAreaPageModule' },
  
  //{ path: 'skill-set', loadChildren: './user/skill-set/skill-set.module#SkillSetPageModule' },

  {
    path: 'skill-set/:user_id',
    loadChildren: () => import('./user/skill-set/skill-set.module').then(m => m.SkillSetPageModule)
  },

 { path: 'select-job-skill', loadChildren: './utility-components/select-job-skill/select-job-skill.module#SelectJobSkillPageModule' },
 
 { path: 'list-documents/:user_id', loadChildren: './user/documents/list-documents/list-documents.module#ListDocumentsPageModule' },
 { path: 'upload-document', loadChildren: './user/documents/upload-document/upload-document.module#UploadDocumentPageModule' },
 //{ path: 'documents/detail', loadChildren: './user/documents/view-document/view-document.module#ViewDocumentPageModule' },

 { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
 
  { path: 'unauthorized', loadChildren: './unauthorized/unauthorized.module#UnauthorizedPageModule' },
  { path: '**', redirectTo: 'page-not-found' },]

 

;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
