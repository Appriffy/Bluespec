import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//import { ShellModule } from '../../../shell/shell.module';
import { WorkReviewComponent } from './work-review.component';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule.forRoot()
  ],
  declarations: [
    WorkReviewComponent
  ],
  exports: [
    WorkReviewComponent
  ]
})
export class WorkReviewModule {}
