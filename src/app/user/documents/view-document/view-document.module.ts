import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PdfViewerModule, PdfViewerComponent } from 'ng2-pdf-viewer';
import { ViewDocumentPage } from './view-document.page';
import { ComponentsModule } from '../../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ViewDocumentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewDocumentPage],
})
export class ViewDocumentPageModule {}
