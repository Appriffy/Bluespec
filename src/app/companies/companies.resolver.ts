import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStore } from '../shell/data-store';
import { CompanyService } from './companies.service';
import { CompanyListingModel } from '../dbmodels/company-model';

@Injectable()
export class CompanyListingResolver implements Resolve<any> {

  constructor(private dealsService: CompanyService) {
    
  }

  resolve() {
    //const dataSource: Observable<CompanyListingModel> = this.dealsService.getListingDataSource();
    // const dataStore: DataStore<CompanyListingModel> = this.dealsService.getListingStore(dataSource);
    // return dataStore;
  }
}
