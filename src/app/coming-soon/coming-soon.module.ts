import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ComingSoonPage } from './coming-soon.page';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComingSoonPage]
})
export class ComingSoonPageModule {
  constructor(public menu: MenuController) { }
  ngOnInit(): void {
    this.menu.enable(false);
  }
}
