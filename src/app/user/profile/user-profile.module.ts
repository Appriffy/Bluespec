import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserProfilePage } from './user-profile.page';
import { UserService } from '../user.service';
import { UserProfileResolver } from './user-profile.resolver';
import { ComponentsModule } from '../../components/components.module';
import { ChangeProfileStatusModal } from './change-profile-status/change-profile-status.modal';
import { WorkReviewModule } from '../work-reviews/work-review/work-review.module';
import { ChangeProfileDescriptionModal } from './change-profile-description/change-profile-description.modal';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage,
    resolve: {
      data: UserProfileResolver
    }
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    WorkReviewModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserProfilePage, ChangeProfileStatusModal, ChangeProfileDescriptionModal],
  providers: [
    UserProfileResolver,
    UserService
  ],
  entryComponents:[ChangeProfileStatusModal, ChangeProfileDescriptionModal]
})
export class UserProfilePageModule {}
