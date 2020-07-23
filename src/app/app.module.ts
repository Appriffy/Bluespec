import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';

import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

//import { PdfViewerModule, PdfViewerComponent } from 'ng2-pdf-viewer';

import { UserService } from './user/user.service';
import { SyncService } from './services/sync.service';
import { CompanyService } from './companies/companies.service';
//import { myEnterAnimation } from './animations/enter_animation';
//import { SelectJobAreaPageModule } from './app-masters/job-areas/select-job-area/select-job-area.module';
//import { myEnterAnimation } from './animations/enter_animation';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ComponentsModule,
    //PdfViewerModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UserService, SyncService, CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
