export class JobAreas {
    id: number;
    title: string;
    is_selected:false;
}

import { ShellModel } from '../shell/data-store';
export class JobAreaModel extends ShellModel {
    id: number;
    title: string;
    image:string;
    job_area_desc:string;
    enabled:false;
}

export class JobAreaListingModel extends ShellModel {
    items: Array<JobAreaModel> = [
      new JobAreaModel(),
      new JobAreaModel(),
      new JobAreaModel(),
      new JobAreaModel()
    ];
  
    constructor() {
      super();
    }

    public getItems() : Array<JobAreaModel>{
      return this.items;
    }

    public setItems(itemsSent:Array<JobAreaModel>){
       this.items = itemsSent;
    }
}

export class JobAreaDetailModel extends JobAreaModel{
  num_resources: string;
  num_likes: string;
  jobSkills: []

  constructor() {
    super();
  }
}