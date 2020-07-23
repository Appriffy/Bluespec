import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UploadDocumentPage } from './upload-document.page';
import { ComponentsModule } from '../../../components/components.module';
import { SelectDocumentTypePage } from '../../../utility-components/select-document-type/select-document-type.page';
import { SelectDocumentTypePageModule } from '../../../utility-components/select-document-type/select-document-type.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

const routes: Routes = [
  {
    path: '',
    component: UploadDocumentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    SelectDocumentTypePageModule,
    PdfViewerModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[SelectDocumentTypePage],
  declarations: [UploadDocumentPage]
})
export class UploadDocumentPageModule {}
