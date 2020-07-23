import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { UpdateUserModal } from './update/update-user.modal';
import { CreateUserModal } from './create/create-user.modal';
import { UpdateUserModule } from './update/update-user.module';
import { SelectDocumentTypePageModule } from '../utility-components/select-document-type/select-document-type.module';
import { SelectDocumentTypePage } from '../utility-components/select-document-type/select-document-type.page';
import { UpdateDocumentModal } from './documents/update/update-document.modal';
import { SelectCountryPageModule } from '../utility-components/select-country/select-country.module';
import { SelectCountryPage } from '../utility-components/select-country/select-country.page';

const firebaseRoutes: Routes = [
  {
    path: 'listing/:user_role',
    data : [{skill : 3, status : 'All', 'numJobs': '1'}],
    loadChildren: () => import('./listing/listing.module').then(m => m.ListingPageModule)
  },
  {
    path: 'details/:user_id',
    loadChildren: () => import('./profile/user-profile.module').then(m => m.UserProfilePageModule)
  },
  {
    path: 'update/:user_id',
    loadChildren: () => import('./update-user/update-user.module').then(m => m.UpdateUserModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/user-profile.module').then(m => m.UserProfilePageModule)
  },
  {
    path: 'upload-document',
    loadChildren: () => import('./documents/upload-document/upload-document.module').then(m => m.UploadDocumentPageModule)
  },
  
  {
    path: 'edit-profile/:user_id',
    loadChildren: () => import('./update/update-user.module').then(m => m.UpdateUserModule)
  },
  {
    path: 'relocation-fees/:user_id',
    loadChildren: () => import('./relocation-fees/relocation-fees.module').then(m => m.RelocationFeesPageModule)
  },
  {
    path: 'assign-skills/:user_id',
    loadChildren: () => import('./assign-skills/assign-skills.module').then(m => m.AssignSkillsPageModule)
  },

  {
    path: 'documents/detail/:doc_id',
    loadChildren: () => import('./documents/view-document/view-document.module').then(m => m.ViewDocumentPageModule)
  },

  { path: 'reviews/:user_id', 
  loadChildren: './work-reviews/list/work-reviews.module#WorkReviewsPageModule' },

];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    UpdateUserModule,
    SelectCountryPageModule,
    SelectDocumentTypePageModule,
    RouterModule.forChild(firebaseRoutes)
  ],
  entryComponents: [
    CreateUserModal,
    UpdateUserModal,
    SelectCountryPage,
    SelectDocumentTypePage,
    UpdateDocumentModal
  ],
  declarations: [
    CreateUserModal,
    UpdateDocumentModal
    //UpdateUserModal
  ]
})
export class UsersIntegrationModule {}
