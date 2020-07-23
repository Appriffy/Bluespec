import * as dayjs from 'dayjs';

import { ShellModel } from '../shell/data-store';
import { CompanyModel } from './company-model';

export class JobItemModel extends ShellModel{
  id:number;
  title: string;
  qcode: string;
  job_description: string;
  user_id: number;
  job_type: number;
  job_type_name: string;
  status:string;
  category_id: number;
  currency: string;
  salary_type: string;
  job_area: number;
  job_area_name: string;
  distance:number;
  latitude:number;
  longitude:number;
  address:string;
  date_created:string;
  date_updated:string;
  date_closing:string;

  numApplications:number;
  numShortlists:number;
  numViews:number;
  numTotalViews:number;

  //Personal Stats
  numMyViews:number;
  hasApplied:boolean;
  applicationStatus:string;

  jobSkills: Array<{
    id: number, title: string}> = [
      {id:0, title:''},
      {id:0, title:''},
      {id:0, title:''},
     {id:0, title:''}
  ];
  jobPrefs:JobRequestPrefs;
  jobSalary: JobRequestSalary;
  company: CompanyModel;
  expirationDate: string;
  //expirationDate: string = dayjs().add(5, 'day').format('MM/DD/YYYY HH:mm:ss') as string;
}


export class JobRequestPrefs{
    id: string;
    job_id: number;
    is_loc_enabled:number;
    notify_range:number;
    minExp:number;
    maxExp:number;
    enableCustomOffer:number;
    notify_email:string;
}

export class JobRequestSalary{
  id: string;
  job_id: number;
  min_salary:number;
  max_salary:number;
  fixed_fee:number;
  min_rate_per_hour:number;
  max_rate_per_hour:number;
}

export class JobListingModel extends ShellModel {
  error: true;
  message: string = "";
  numRecords: number = 0;
  items: Array<JobItemModel> = [
    new JobItemModel(),
    new JobItemModel(),
    new JobItemModel(),
    new JobItemModel()
  ];

  constructor() {
    super();
  }

  public setItems(items:any){
    this.items = items;
  }
}
