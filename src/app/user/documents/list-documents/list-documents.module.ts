import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListDocumentsPage } from './list-documents.page';
import { UploadDocumentPage } from '../upload-document/upload-document.page';

const routes: Routes = [
  {
    path: '',
    component: ListDocumentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListDocumentsPage],
  //entryComponents:[UploadDocumentPage]
})
export class ListDocumentsPageModule {}
