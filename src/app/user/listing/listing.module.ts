import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ListingPage } from './listing.page';
import { ComponentsModule } from '../../components/components.module';
import { UserService } from '../user.service';
import { UserListingResolver } from '../user-listing-resolver';
import { UserFilterPage } from './user-filter/user-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingPage,
    resolve: {
      data: UserListingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListingPage, UserFilterPage],
  providers: [
    UserService,
    UserListingResolver
  ],
  entryComponents: [ UserFilterPage]
})
export class ListingPageModule {}
